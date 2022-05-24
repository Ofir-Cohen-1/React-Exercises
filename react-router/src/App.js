import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mainContainer">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Products/:id" component={ProductDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
