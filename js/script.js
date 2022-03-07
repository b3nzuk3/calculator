//   The function responsible for calculating the date Value.

document.querySelector("button").addEventListener("click", callDayOfWeek);


function callDayOfWeek() {
  // Data reprensenting Days corresponding with Date values

  var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  //Akan Names corresponding with Days and Date values
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var dob = document.querySelector("#dateInput").value;
  var year = parseInt(dob.slice(0, 4));
  var month = parseInt(dob.slice(5, 7));
  var day = parseInt(dob.slice(8, 10));
  var a = Math.floor((14 - month) / 12);
  var y = year - a;
  var m = month + 12 * a - 2;
  var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
    Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
  alert(d);
}
