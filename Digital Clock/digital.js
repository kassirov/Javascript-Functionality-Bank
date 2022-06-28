function displayTime() {
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var session = document.getElementById("session");

  // Time Statements
  if (hours >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours > 12) {
    hours = hours - 12;
  }

  // Background Statement

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(displayTime, 10);

document.body.style.backgroundImage =
  "url('https://source.unsplash.com/1600x900/?dark')";
