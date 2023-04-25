import { Wallet, ethers } from "ethers";

export const useCleanup = ({
  initialProvider,
}: {
  initialProvider: ethers.providers.JsonRpcProvider;
}) => {
  const cleanup = async ({
    wallets,
    returnWallet,
  }: {
    wallets: Wallet[];
    returnWallet: `0x${string}`;
  }) => {
    const allTransactions = [];
    for (let i = 0; i < wallets.length; i++) {
      const wallet = wallets[i];
      const balance = await initialProvider.getBalance(wallet.address);
      const gasPrice = await wallet.connect(initialProvider).getGasPrice();

      if (balance.gt(0)) {
        console.log(
          `Sweeping ${ethers.utils.formatEther(balance)} ETH from ${
            wallet.address
          }`
        );
        const tx = {
          to: returnWallet,
          from: wallet.address,
          value: balance.sub(gasPrice.mul("21000")),
          gasLimit: "21000",
          gasPrice: gasPrice,
        };
        const txRequest = await wallet
          .connect(initialProvider)
          .populateTransaction(tx);
        const signedTx = await wallet.signTransaction(txRequest);
        const txHash = await initialProvider.send("eth_sendRawTransaction", [
          signedTx,
        ]);
        console.log(`Swept to ${returnWallet} in tx ${txHash}`);
        allTransactions.push(txHash);
      }
    }

    // Wait for all sweep transactions to complete
    await Promise.all(
      allTransactions.map(async (txHash) => {
        await initialProvider.waitForTransaction(txHash);
      })
    );

    return wallets;
  };

  return { cleanup };
};
