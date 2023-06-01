import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { goerli, mainnet, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygonMumbai],
  [
    // jsonRpcProvider({
    //   rpc: () => ({
    //     http: "https://eth.llamarpc.com",
    //   }),
    // }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RPC Speedtest",
  chains,
});

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains };
