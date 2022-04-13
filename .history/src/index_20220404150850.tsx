import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { NavBar } from "./views/layout/NavBar";
import { GlobalStyles } from "./views/styles/styles";

ReactDOM.render(
  <>
    <GlobalStyles />

    <Router>
      <NavBar />
      <App />
    </Router>
  </>,
  document.getElementById("root")
);
