import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import UseStateApp1 from "./components/1.useState/UseStateApp1";
import UseStateApp2 from "./components/1.useState/UseStateApp2";
import UseStateApp3 from "./components/1.useState/UseStateApp3";
import UseEffectApp1 from "./components/2.useEffect/UseEffectApp1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*  <App /> */}
    {/* <UseStateApp3 /> */}
    <UseEffectApp1 />
  </React.StrictMode>
);
