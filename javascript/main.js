let daysSpan = document.getElementById("days");
let hoursSpan = document.getElementById("hours");
let minutesSpan = document.getElementById("minutes");
let secondsSpan = document.getElementById("seconds");

function counterUp() {
  daysSpan.innerHTML = parseInt(daysSpan.innerHTML) + 1;
  if (daysSpan.innerHTML === "160") {
    clearInterval(counterDays);
  }
}
let counterDays = setInterval(counterUp, 10);

function counterHourUp() {
  hoursSpan.innerHTML = parseInt(hoursSpan.innerHTML) + 1;
  if (hoursSpan.innerHTML === "190") {
    clearInterval(counterHours);
  }
}

let counterHours = setInterval(counterHourUp, 10);

function counterMinutesUp() {
  minutesSpan.innerHTML = parseInt(minutesSpan.innerHTML) + 1;
  if (minutesSpan.innerHTML === "220") {
    clearInterval(counterMinutes);
  }
}

let counterMinutes = setInterval(counterMinutesUp, 10);

function counterSecondsUp() {
  secondsSpan.innerHTML = parseInt(secondsSpan.innerHTML) + 1;
  if (secondsSpan.innerHTML === "250") {
    clearInterval(counterSeconds);
  }
}

let counterSeconds = setInterval(counterSecondsUp, 10);
