import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shop.component";
import Header from "./components/header/header.component";
import SignInAndSingUpPage from ".//pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // auth.onAuthStateChanged is authentication from firebase library -> if user does not log out firebase remembers the settings (open subscription, have to close it when it unmounts to prevent memory leaks <- unsubscribeFromAuth )
      createUserProfileDocument(user);
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // closing subscribtion
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSingUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
