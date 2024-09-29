let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let today = new Date();
let allDay = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
let allMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = allDay[today.getDay()];
month.innerHTML = allMonth[today.getMonth()];
year.innerHTML = today.getFullYear();
