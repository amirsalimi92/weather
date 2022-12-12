let locationN = document.querySelector(".location");
let temp = document.querySelector(".temp");
let feels = document.querySelector(".feels");
let desc = document.querySelector(".desc");
let icon = document.querySelector(".icon");

const API_Code = "045024c045940c0f70d0f1e4dd3c9fef";

navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  localStorage.setItem("lat", lat);
  localStorage.setItem("lon", long);
});

let runAPI = {
  setData: function (lat, lon, code) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=metric&appid=" +
        code
    )
      .then((Response) => Response.json())
      .then((data) => this.giveData(data));
  },

  giveData: function (data) {
    cityName = data.name;
    temper = data.main.temp.toFixed(1);
    feelsLike = data.main.feels_like.toFixed(1);
    descr = data.weather[0]["description"];
    type = data.weather[0]["main"];
    iconCode = data.weather[0].icon;

    locationN.innerHTML = cityName;
    temp.innerHTML = temper + "  <span>&#8451</span>";
    feels.innerHTML = "Feels like: " + feelsLike + "  <span>&#8451</span>";
    desc.innerHTML = descr;
    if (iconCode != "01n") {
      icon.src = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    }

    console.log(data);
  },
};

runAPI.setData(
  localStorage.getItem("lat"),
  localStorage.getItem("lon"),
  API_Code
);
