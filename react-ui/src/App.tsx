import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RoutePrivate from "routes/PrivateRoute";

import Login from "routes/Login";
import Home from "routes/Home";
import Orders from "routes/Orders";
import NotFound from "routes/NotFound";

import Footer from "components/Footer";
import Header from "components/Header";
import Notifications from "components/Notifications";

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Notifications />
      <Switch>
        <Route exact path="/" component={Home} />
        <RoutePrivate exact path="/orders" component={Orders} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
