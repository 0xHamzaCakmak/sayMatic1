import { useState } from "react";
import { useTranslation } from "react-i18next";
import bitcoinpng from "../../assets/img/coin-img/bitcoin.png";
import etheriumpng from "../../assets/img/coin-img/etherium.png";
import sciCoin from "../../assets/img/coin-img/sciCoin.png";
import matToken from "../../assets/img/coin-img/matToken.png";

//import scitokens from "../../components/Api Coin Data/scitokens.jsx";

const CryptoFiat = () => {
  /* const [tokens, setTokens] = useState([]);
  const [firstStart, setFirstStart] = useState(true);

  const { t } = useTranslation();
   if (firstStart) {
    scitokens().then((items) => {
        setTokens(items);
      if (items.length > 2) {
      }
      setFirstStart(false);
      resim için kullan
      <img src={ tokens.length>2 ? tokens[0].icon : ""} className="coinWidth" />
    });
  } */

  return (
    <div className=" containerCyrpto">
      <div className="containerCyrptoici">
        <a href="" className="img">
        <img src={bitcoinpng} id="coinWidth" />
        </a>
        <button className="item-btn" style={{marginRight:"2px",color:"blue"}}>Buy</button>
        <button className="item-btn" style={{width:"66px"}}>Trade</button>
        <label htmlFor=""className="labelText">Bitcoin</label>
        <label htmlFor=""className="labelText">BTC</label>
      </div>
      <div className="containerCyrptoici">
        <img src={etheriumpng} id="coinWidth" />
        <button className="item-btn" style={{marginRight:"2px",color:"blue"}}>Buy</button>
        <button className="item-btn" style={{width:"66px"}}>Trade</button>
        <label htmlFor=""className="labelText">Etherium</label>
        <label htmlFor=""className="labelText">ETH</label>
      </div>
      <div className="containerCyrptoici">
      <a href="" className="img">
        <img src={sciCoin} id="coinWidth" />
        </a>
        <button className="item-btn" style={{marginRight:"2px",color:"blue"}}>Buy</button>
        <button className="item-btn" style={{width:"66px"}}>Trade</button>
        <label htmlFor="" className="labelText">SciMatic</label>
        <label htmlFor=""className="labelText">SCI</label>
      </div>
      <div className="containerCyrptoici">
      <a href="" className="img">
        <img src={matToken} id="coinWidth" />
        </a>
        <button className="item-btn" style={{marginRight:"2px",color:"blue"}}>Buy</button>
        <button className="item-btn" style={{width:"66px"}}>Trade</button>
        <label htmlFor="" className="labelText">SciUSD</label>
        <label htmlFor="" className="labelText">SUSD</label>
        
      </div>
    </div>
  );
};

export default CryptoFiat;
