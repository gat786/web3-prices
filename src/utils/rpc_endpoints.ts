import env from "./exports"

export enum SupportedChains {
    ETH,
    BSC,
    POLYGON
}

export const get_rpc_endpoint = (chain_type: SupportedChains): string => {
    switch(chain_type) {
        case SupportedChains.BSC:
            return env.BSC_RPC_ENDPOINT;
        case SupportedChains.ETH:
            return env.ETH_RPC_ENDPOINT;
        case SupportedChains.POLYGON:
            return env.ETH_RPC_ENDPOINT;
        default:
            return env.ETH_RPC_ENDPOINT;
    }
}

export default {
    get_rpc_endpoint
}
