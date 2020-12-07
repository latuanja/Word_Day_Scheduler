//code for current date variable
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[document.getDay()];
//code for date arrangment/formatting(M D Y)
var date = d.getDay()+today.getMonth()+"-"+(today.getDate()+1)+"-"+today.getFullYear();
document.getElementById("currentDay").innerHTML = date;