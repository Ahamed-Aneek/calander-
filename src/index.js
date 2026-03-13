import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Foods } from "./App";
import { Hotels } from "./App";
import { useState } from "react";
const Main = ReactDOM.createRoot(document.getElementById("main"));

const Conatainer = function () {
  ///
  const [value, ChangeValue] = useState("");
  const select = (e) => {
    ChangeValue(e.target.value);
    console.log(value);
  };
  //////
  return (
    <section className="sect">
      <Foods fun={select}></Foods>
      <Hotels hotel={value || "parata"}></Hotels>
    </section>
  );
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
Main.render(<Conatainer></Conatainer>);
