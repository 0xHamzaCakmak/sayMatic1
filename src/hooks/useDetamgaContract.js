import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { DETAMGA_ABI } from "../constants/abi";
import { DETAMGA_ADDRESS } from "../constants/address";

export const useDetamgaContract = () => {
    const [detamgaContract, setDetamgaContract] = useState(null);

    useEffect (() =>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const _detamgaContract = new ethers.Contract(DETAMGA_ADDRESS,DETAMGA_ABI,signer);
        setDetamgaContract(_detamgaContract);
    },[]);
    return detamgaContract;
};