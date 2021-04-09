import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
