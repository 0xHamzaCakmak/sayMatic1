import React from "react";

import SecHeader from "../layouts/Header/SecHeader/index.jsx";
import Sidebar from "../layouts/Sidebar/sidebar.jsx";
import Metamask from "../layouts/Sidebar/Metamask.js";
import { ProSidebarProvider } from 'react-pro-sidebar';
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";



const giris = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      
      <h3>Wallet Page</h3>
      <div className="row">
        <ProSidebarProvider>
          <SecHeader />
          <Metamask/>
        </ProSidebarProvider>
        
      </div>
    </div>
  );
};

export default giris;
