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
