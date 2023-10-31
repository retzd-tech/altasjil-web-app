import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebase from "./services/Firebase";

import {
  Loading,
  Dashboard,
  About,
  MadrasahList,
  MadrasahDetail,
  MadrasahPayment,
  HijriCalendar,
  Profile
} from "./containers";
import { TopNavbar, Background, BottomNavbar, Logo } from "./components";
import { withRouter } from "react-router-dom";
import { Breakpoint } from "react-socks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      title: "",
      isLoading: true,
      isLoggedIn: false,
      user: {},
      userData: {},
    };
  }

  componentDidMount = async () => {
    await this.checkIsLoggedIn();
  };

  checkIsLoggedIn = async () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        return this.setState({
          userData: user.providerData,
          user: user,
          isLoading: false,
          isLoggedIn: true,
        });
      }
      return this.setState({
        user: {},
        userData: {},
        isLoading: false,
        isLoggedIn: false,
      });
    });
  };

  setLoading = (isLoading) => {
    this.setState({ isLoading });
  };

  render() {
    const { isLoading, isLoggedIn } = this.state;
    return (
      <div>
        <Breakpoint small down>
          {isLoading && <Loading />}
          <TopNavbar text={this.state.title} />
          <Background />

          <div className="page-container">
            <Switch>
              {!isLoggedIn && !isLoading && (
                <>
                  <div className="login-title">
                    <Logo />
                  </div>
                  <div id="firebase-auth">
                    <h2>Selamat datang di aplikasi Al-Tasjil</h2>
                    <StyledFirebaseAuth
                      uiConfig={firebase.uiConfig}
                      firebaseAuth={firebase.auth()}
                    />
                  </div>
                </>
              )}

              {isLoggedIn && !isLoading && (
                <>
                <Route
                    exact
                    path="/kalendar"
                    render={(props) => {
                      return <HijriCalendar {...props} />;
                    }}
                  />
                  <Route
                    exact
                    path="/madrasah/:id"
                    render={(props) => {
                      return <MadrasahDetail {...props} />;
                    }}
                  />
                  <Route
                    exact
                    path="/madrasah/:id/pembayaran"
                    render={(props) => {
                      return <MadrasahPayment {...props} user={this.state.user}/>;
                    }}
                  />
                  <Route
                    exact
                    path="/madrasah"
                    render={(props) => {
                      return <MadrasahList {...props} />;
                    }}
                  />
                  <Route
                    exact
                    path="/"
                    render={(props) => <Dashboard {...props} />}
                  />

                  <Route
                    exact
                    path="/tentang"
                    render={(props) => <Profile {...props} />}
                  />
                </>
              )}
            </Switch>
          </div>
          {isLoggedIn && <BottomNavbar />}
        </Breakpoint>

        <Breakpoint medium up>
          <h2>Sorry, only available on Mobile Devices</h2>
        </Breakpoint>
      </div>
    );
  }
}

export default withRouter(App);
