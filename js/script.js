
//   The function responsible for calculating the date Value..

var dob = document.querySelector("#dateInput").value;
var year = dob.slice(0,4);
var month = dob.slice(5,7);
var day = dob.slice(8,10);

function callDayOfWeek(day, month, year) {
var a = Math.floor((14 - month) / 12);
var y = year - a;
var m = month + 12 * a - 2;
 var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +//
Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
 return d;
  }
