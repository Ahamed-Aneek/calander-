"";
import { hotels } from "./helper";
const food = ["parata", "rice", "kottu", "biriyani"];
export const Hotels = function ({ hotel }) {
  return (
    <ol className="hotels">
      {hotels[hotel].map((e) => (
        <li className="arrange">
          <span>Shop:{e.Name}</span>
          <span>Location:{e.Location}</span>
          <img src={e.image} alt="h"></img>
        </li>
      ))}
    </ol>
  );
};
export const Foods = function ({ fun }) {
  return (
    <header className="top">
      <select onChange={fun}>
        {food.map((e) => (
          <option>{e}</option>
        ))}
      </select>
    </header>
  );
};
