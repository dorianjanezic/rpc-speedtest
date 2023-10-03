import React from 'react';
import { CopyButton } from './buttons/CopyButton';
import { EdenIcon } from './icons/EdenIcon';
import { EdenText } from './icons/EdenText';

type Rpc = {
    label: string,
    first: number,
    second: number,
    third: number,
}

interface ScoreBoardProps {
    rpcData: Rpc[]
}

export const ScoreBoard = ({
    rpcData = []
}: ScoreBoardProps) => {

    const rpcsRanked = rpcData.sort((a: Rpc, b: Rpc): number => {
        const sorted = b.first - a.first;
        return sorted;
    })

    return (
        <div className="text-brand-blue text-center font-bold bg-gradient-fresh p-6 rounded-md h-fit mb-6">
            <table className="border-separate border-spacing-y-0.5">
                <caption className="text-2xl mb-4">{"RPC Speed Test"}</caption>
                <thead className="">
                    <tr className="font-semibold text-base">
                        <th className="text-left">
                            {"Rank"}
                        </th>
                        <th className="text-left px-2">
                            {"RPC"}
                        </th>
                        <th className="px-4">
                            {"1ST"}
                        </th>
                        <th className="px-4">
                            {"2ND"}
                        </th>
                        <th className="px-4">
                            {"3RD"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rpcsRanked.map((rpc, index) =>
                        <tr className={index === 0 ? "bg-white/80" : "bg-white/40"} key={index}>
                            <td className="bg-brand-blue text-white text-xl font-medium px-5 py-4 leading-none">
                                {index + 1}
                            </td>
                            <td className="px-2 font-semibold mr-60 text-left max-w-xs truncate">
                                {rpc.label}
                            </td>
                            <td>
                                {rpc.first}
                            </td>
                            <td>
                                {rpc.second}
                            </td>
                            <td>
                                {rpc.third}
                            </td>
                            <td className="px-4 pl-8">
                                <CopyButton label="Copy" url={rpc.label} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="flex justify-end mt-10 gap-2">
                <h1 className="flex items-end">{"Powered by"}</h1>
                <EdenIcon />
                <EdenText />
            </div>
        </div>
    );
};