import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const HatsCompletedPage = () => (
  <div>
    <h1>HATS COMPLETED PAGE</h1>
  </div>
);

const App = () => {
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/hats" exact component={HatsPage} />
      <Route path="/hats/completed" component={HatsCompletedPage} />
    </div>
  );
};

export default App;
