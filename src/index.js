import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";

const wokooApp = document.createElement("div");
wokooApp.id = "mokyBox-app";
document.body.appendChild(wokooApp);
ReactDOM.render(<App />, wokooApp);

