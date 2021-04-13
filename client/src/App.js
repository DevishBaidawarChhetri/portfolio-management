import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import StockList from "./components/Dashboard/StockList";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BuySaleStock from "./components/Dashboard/BuySaleStock";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/buysale" component={BuySaleStock} />
        <Route exact path="/stocks" component={StockList} />
        <Redirect to="/" />
      </Switch>
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
