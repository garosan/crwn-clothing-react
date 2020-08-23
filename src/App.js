import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" exact component={ShopPage} />
    </div>
  );
};

export default App;
