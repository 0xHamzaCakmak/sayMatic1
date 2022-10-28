import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { DECERTA_ADDRESS } from "../constants/address";
import { DECERTA_ABI} from "../constants/abi";

export const useDecertaContract =() =>{
    const [decertaContract, setDecertaContract]= useState (null);

    useEffect(() =>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const _decertaContract = new ethers.Contract(DECERTA_ADDRESS,DECERTA_ABI, signer);
        setDecertaContract(_decertaContract);
    }, []);
    return decertaContract;
};