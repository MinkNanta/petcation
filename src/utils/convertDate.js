const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getMonthAndYear(dateStr) {
  const newDate = new Date(dateStr);
  return month[newDate.getMonth()] + ' ' + newDate.getFullYear();
}

export function getDate7DaysFromNow() {
  const myCurrentDate = new Date();
  const myFutureDate = new Date(myCurrentDate);
  myFutureDate.setDate(myFutureDate.getDate() + 7);
  return (
    myFutureDate.getDate() +
    ' ' +
    month[myFutureDate.getMonth()] +
    ' ' +
    myFutureDate.getFullYear()
  );
}

export function dashesToSlashes(dateStr) {
  // 2022-03-03
  let date = String(+dateStr.slice(8));
  let month = String(+dateStr.slice(5, 7));
  let year = String(+dateStr.slice(0, 4));
  return date + '/' + month + '/' + year;
}
