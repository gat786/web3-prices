import { ethers } from "ethers";
import env from "./utils/exports";

import * as rpc from "./utils/rpc_endpoints"

const minABI = [
  // balanceOf
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
];

const token_address = "0x0d8775f648430679a709e98d2b0cb6250d2887ef";


async function get_balance(wallet_address: string, chain_type: rpc.SupportedChains) {
    const provider = new ethers.JsonRpcProvider(rpc.get_rpc_endpoint(chain_type));
    const contract = new ethers.Contract(token_address, minABI, provider);
    const balance = await contract.balanceOf(wallet_address);

    console.log(`Balance of ${wallet_address} is ${balance}`)
}

async function get_balance_for_all(wallet_address: string) {
    get_balance(wallet_address, rpc.SupportedChains.BSC);
    get_balance(wallet_address, rpc.SupportedChains.ETH);
    get_balance(wallet_address, rpc.SupportedChains.POLYGON);
}