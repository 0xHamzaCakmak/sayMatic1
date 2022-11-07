import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import Collapse from "../../../src/assets/img/coin-img/Collapse.png";
import { useDecertaContract } from "../../hooks/useDecertaContract";
import { useDetamgaContract } from "../../hooks/useDetamgaContract";
import { useState } from "react";
import {BigNumber, ethers } from "ethers";
function Layout() {
  const { collapseSidebar } = useProSidebar();
  const decertaContract = useDecertaContract();
  const detamgaContract = useDetamgaContract();
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState(null);

  //sertifikalrı getir
  function Certificates() {
    //const belgeler=decertaContract.benimBelgelerim(account).map((belge)=>belge)
    console.log(decertaContract);
  }

  function MyPapers() {
    console.log("Contract adres", detamgaContract);
  }

  function Editors() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => setAccount(accounts[0]))
      .catch((err) => console.log(err));
    console.log("my adres", account);
    //adresime ait dergi saysını döndür...
    const counter = detamgaContract.myJournalsCounter(account);
    console.log("counters", counter);
  }

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div>
        <a className="btn" onClick={() => collapseSidebar()}>
          <img
            src={Collapse}
            alt=""
            style={{ marginLeft: "15px", width: "50px", height: "25px" }}
          />
        </a>
        <Sidebar style={{ width: "1px" }}>
          <Menu>
            <SubMenu label="Decerta">
              <MenuItem className="btn" onClick={Certificates}>
                Certificates
              </MenuItem>
            </SubMenu>
            <SubMenu label="DeTamga">
              <MenuItem className="btn" onClick={MyPapers}>
                {" "}
                My Papers{" "}
              </MenuItem>
              <MenuItem className="btn" onClick={Editors}>
                {" "}
                Editors{" "}
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
}
export default Layout;
