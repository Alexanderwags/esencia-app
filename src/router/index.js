import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "./../components/Footer/index";
function Router() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Router;
