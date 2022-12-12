let main = document.querySelector(".main");
let back = document.querySelector(".back");
let button = document.querySelector(".fa-gear");

button.addEventListener("click", () => {
  main.classList.toggle("menu");
  back.classList.toggle("backShow");
});

screen.orientation.lock();
