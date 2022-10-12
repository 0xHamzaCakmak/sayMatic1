import React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageselect";
import './language.css'
import {ethers} from "ethers";

const SecHeader = ({ Logo, dropdownItem, MenuInfo }) => {
  const { t } = useTranslation();
  const [account, setAccount] =useState("");
  const [provider, setProvider] = useState(null);
  const [madres, setMadres] =useState("");
  function connect() {
    if(!window.ethereum) {
      alert ("Metamask is not installed");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    provider
    .send("eth_requestAccounts", [])
    .then(accounts=>setAccount(accounts[0]))
    .catch((err)=>console.log(err));

    const signer = provider.getSigner();
    console.log(signer);
    
    //cüzdandan yapılan tüm transferlerin countunu verir
     signer.getTransactionCount().then((count)=>console.log(count));
     //signer ile bağlı olan cüzdan adresini verir
     signer.getAddress().then((addres)=>setMadres(addres));


    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-white fixed-top bg-custom-2" id="banner" >
      <div className="container" style={{ height: "2em"}}>
        {/* Brand */}
        <a className="navbar-brand" href="#">
          <span>
            <img
              draggable="false"
              src={Logo}
              alt="logo"
              style={{ width: "20%" }}
            />
          </span>
          <a href="#" style={{color:"#1b75bb",fontWeight:"bold"}}>Say</a>
          <a href="#" style={{color:"#f6921e",fontWeight:"bold"}}>matik</a>
        </a>
        {/* Toggler/collapsibe Button */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              {/*  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Anasayfa</a> */}
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               
              </div>
            </li>
            
            {MenuInfo &&
              MenuInfo.map((item, key) => (
                <li className="nav-item" key={key}>
                  <a className="nav-link" href={item.path}>
                    {t(item.nameLink)}
                  </a>
                </li>
              ))}
              
            <li className="lh-55px">
              
              <a className="btn login-btn ml-50 " onClick={()=>{
               if(account) return;
               connect();
              }} >
                {account ? "0x..."+account.slice(-4) : t("connect")}
              </a>
              
            </li>
            <LanguageSelect/>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecHeader;
