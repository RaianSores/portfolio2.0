import React from "react";
import ReactDOM from "react-dom";

import { Home } from "./templates/Home";

import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Menu />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
