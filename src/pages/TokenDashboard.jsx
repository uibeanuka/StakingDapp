import { erc20ABI, useContractReads } from "wagmi"

export const TokenDashboard = () => {
    const def = {
        address: "0x62f9D3A871cd539EEF606cF3cdF77c30386128AB",
        abi: erc20ABI,
    }
    const { data, isError, isLoading } = useContractReads({
        contracts: [
            {
            ...def,
            functionName: 'symbol'
            },
            {
            ...def,
            functionName: 'name'
            },
            {
            ...def,
            functionName: 'decimal'
            }
        ]
    }
    )
    return (
        <div>
            {data.forEach((e, i) => {
                return (
                    <div> {e}</div>
                )
            })}
        </div>
    )
}