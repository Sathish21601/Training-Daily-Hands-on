const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

days.forEach(function (day) {
  console.log(day);
});

const noOfLetters = days.map(function (day) {
  return day.length;
});
console.log(noOfLetters);

const StoZ = days.filter(function (day) {
  return /^([s-zS-z])$/.test(day[0]);
});
console.log(StoZ);

const exactly6 = days.filter(function (day) {
  return day.length === 6;
});
console.log(exactly6);
