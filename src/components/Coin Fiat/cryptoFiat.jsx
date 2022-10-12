import { useState } from "react";
import { useTranslation } from "react-i18next";
import bitcoinpng from "../../assets/img/coin-img/bitcoin.png";
import etheriumpng from "../../assets/img/coin-img/etherium.png";
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
    <div className="welcome-content containerCyrpto ">
      <div className="containerCyrptoici">
        <a href="">
        <img src={bitcoinpng} className="coinWidth" />
        </a>
      </div>
      <div className="containerCyrptoici">
        <img src={etheriumpng} className="coinWidth" />
      </div>
      <div className="containerCyrptoici">
        <h1>sci</h1>
      </div>
      <div className="containerCyrptoici">
        <h1>susd</h1>
      </div>
    </div>
  );
};

export default CryptoFiat;
