import React from "react";
import About from "./About";
import Layout from "./Layout";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <Layout />
        </Route>
        <Route exact path={"/about"}>
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
