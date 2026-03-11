import logo from "./logo.svg";
import "./App.css";
import * as f from "lodash";
import { currentYear } from "./date";
import { currentMonth } from "./date";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
export const date = () => {
  const month = new Date();
  const stringMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(month);
  console.log(stringMonth);
  return stringMonth;
};
export const data = Array.from({ length: 31 }, (_, i) => i + 1);
console.log(data);
export const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map(
  (e) => <li>{f.capitalize(e)}</li>,
);
const day1 = (date) => {
  const c = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(date);
  return ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].indexOf(
    c.toLowerCase(),
  );
};

export const FindCol = (num) => {
  return day1(new Date(currentYear(), currentMonth(), num));
};
