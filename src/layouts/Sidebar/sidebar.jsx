import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import Collapse from "../../../src/assets/img/coin-img/Collapse.png";

function connect() {
  if (!window.ethereum) {
    alert("Metamask is not installed");
    return;
  }
}
function Layout() {
  const { collapseSidebar } = useProSidebar();

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
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <SubMenu label="DeTamga">
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
}
export default Layout;
