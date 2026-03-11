"";
import { data } from "./App";
import { FindCol } from "./App";
import { date } from "./App";
import { currentYear } from "./date";
import { currentMonth } from "./date";
import { currentDate } from "./date";
const isMonth = (date1) => {
  const isTrue = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date1,
  );
  return isTrue === date();
};
export const abstract = data.map((e) => {
  return (
    isMonth(new Date(currentYear(), currentMonth(), e)) && (
      <span
        style={{
          textAlign: "center",
          gridColumn: `${FindCol(e) + 1}/${FindCol(e) + 2}`,
        }}
        className={currentDate() === e && "now"}
      >
        {e}
      </span>
    )
  );
});
console.log(data);
console.log("welcome to new branch");
console.log("hi");
console.log("it is in github");
