import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shop.component";
import Header from "./components/header/header.component";
import SignInAndSingUpPage from ".//pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSingUpPage} />
      </Switch>
    </div>
  );
}

export default App;
