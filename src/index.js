import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { date } from "./App";
import { days } from "./App";
import { abstract } from "./helper";
const Main = ReactDOM.createRoot(document.getElementById("main"));
const DaysNum = function () {
  return <>{abstract}</>;
};
const Header = function () {
  return (
    <header className="head">
      <h1>{date()}</h1>
    </header>
  );
};
const DateHolder = function () {
  return (
    <div className="holder">
      <ol>{days}</ol>
      <DaysNum></DaysNum>
    </div>
  );
};

const Conatainer = function () {
  return (
    <section className="sect">
      <Header></Header>
      <DateHolder></DateHolder>
    </section> 
  );
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
Main.render(<Conatainer></Conatainer>);
console.log(abstract);
