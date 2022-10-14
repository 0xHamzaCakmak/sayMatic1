import React from "react";
import { ethers } from "ethers";
import Logo from "../../../../src/assets/img/core-img/sayMatiklogo.png";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageselect";
import index from '../../../pages/HomeDemo1'
const SecHeader = () => {
  const { t } = useTranslation();
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [madres, setMadres] = useState("");
  function connect() {
    if (!window.ethereum) {
      alert("Metamask is not installed");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => setAccount(accounts[0]))
      .catch((err) => console.log(err));

    const signer = provider.getSigner();
    console.log(signer);

    //cüzdandan yapılan tüm transferlerin countunu verir
    signer.getTransactionCount().then((count) => console.log(count));
    //signer ile bağlı olan cüzdan adresini verir
    signer.getAddress().then((addres) => setMadres(addres));
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-white fixed-top bg-custom-2"
      id="banner"
    >
      <div className="container" style={{ height: "2em" }}>
        {/* Brand */}
        <a className="navbar-brand" href="/">
          <img draggable="false" src={Logo} style={{ width: "20%" }} />
          <a href="/" style={{ color: "#1b75bb", fontWeight: "bold" }}>
            Say
          </a>
          <a href="/" style={{ color: "#f6921e", fontWeight: "bold" }}>
            matik
          </a>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a class="nav-link " href="giris">
                Wallet
              </a>
            </li>
            <li className="nav-item dropdown">
              <a class="nav-link " href="#">
                Exchange
              </a>
            </li>
            <li className="nav-item dropdown">
              <a class="nav-link " href="#">
                Explorer
              </a>
            </li>
            <li className="nav-item dropdown">
              <a class="nav-link " href="#">
                Institutional
              </a>
            </li>

            <li className="lh-55px">
              <a
                className="btn login-btn ml-50 "
                onClick={() => {
                  if (account) return;
                  connect();
                }}
              >
                {account ? "0x..." + account.slice(-4) : t("connect")}
              </a>
            </li>
            <LanguageSelect />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecHeader;
