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
              <MenuItem className="btn"> Certificates </MenuItem>
              <MenuItem className="btn"> Diploma </MenuItem>
            </SubMenu>

            <SubMenu label="DeTamga">
              <MenuItem className="btn"> My Papers </MenuItem>
              <MenuItem className="btn"> Editors </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
}
export default Layout;
