import { isPlatform } from "@ionic/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import {} from "cordova-plugin-ionic";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

const isMobile = isPlatform("android") || isPlatform("ios");
if (process.env.NODE_ENV === "development" && !isMobile) {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
