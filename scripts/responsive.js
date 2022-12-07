let main = document.querySelector(".main");
let back = document.querySelector(".back");
let button = document.querySelector(".fa-gear");

button.addEventListener("click", () => {
  main.style["grid-template-columns"] = "2fr 1fr";
  back.style["display"] = "grid";
  back.style["transition"] = "2s";
});
