import * as dotenv from "dotenv";
dotenv.config();
import { ethers } from "ethers";

import env from "./utils/exports";
import address_file from "./addresses.json";

async function get_balance() {
        
    console.log("Getting balance...");
    const provider = new ethers.JsonRpcProvider(env.ETH_RPC_ENDPOINT);
    const balance = await provider.getBalance("0x8791653aa21c1D9b55ADdadf92bEb7c60E42d72C");
    
    console.log(`Balance is ${balance}`);

    const addresses = address_file.addresses;
    addresses.forEach(async (addr_obj: {address: string, name: string}) => {
        const balance = await provider.getBalance(addr_obj.address);
        console.log(`Balance of ${addr_obj.name} is ${balance}`);
    })
}

get_balance();