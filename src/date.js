"";
export const currentYear = () => {
  const year = new Date().getFullYear();
  return year;
};
console.log(currentYear());
export const currentMonth = () => {
  const month = new Date().getMonth();
  return month;
};

export const currentDate = () => {
  const date = new Date().getDate();
  return date;
};
