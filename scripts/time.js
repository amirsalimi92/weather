const time = new Date();
const hour = time.getHours();
let dayWeek = document.querySelector(".dayWeek");
const date = time.getDate();
const dateHTML = document.querySelector(".day");
const monthHTML = document.querySelector(".month");
let backGround = document.querySelector(".backGround");

let dayNight = "night";

if (hour > 5 && hour < 18) {
  dayNight = "day";
  backGround.style["background-image"] = "url('styles/background/bg.jpg')";
}

//give the name of day like monday, tuesday and...
const dayName = time.toLocaleDateString("us-en", { weekday: "long" });
const monthName = time.toLocaleString("us-en", { month: "long" });
dayWeek.innerHTML = dayName;

//month
dateHTML.innerHTML = date + ".";
monthHTML.innerHTML = monthName;
