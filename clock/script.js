const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
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
  "December"
];

toggle.addEventListener("click", (e) => {
  const body = document.body;
  if (body.classList.contains("dark")) {
    console.log(body.classList);
    body.classList.remove("dark");
    e.target.innerHTML = "Dark mode"
  } else {
    console.log(body.classList);
    body.classList.add("dark")
    e.target.innerHTML = "Light mode"
  }
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForclock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? "PM" : "AM"

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForclock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML =`${hoursForclock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
}

setTime()

setInterval(setTime, 1000);