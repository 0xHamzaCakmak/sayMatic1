import React from "react";
import { ethers } from "ethers";
import SecHeader from "../layouts/Header/SecHeader/index.jsx";
import Sidebar from "../layouts/Sidebar/sidebar.jsx";
import { ProSidebarProvider } from 'react-pro-sidebar';
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";



const giris = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      
      Cüzdan Page
      <div className="row">
        <ProSidebarProvider>
          <SecHeader />
          <Sidebar/>
        </ProSidebarProvider>
        
      </div>
    </div>
  );
};

export default giris;
