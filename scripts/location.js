let locationN = document.querySelector(".location");
let temp = document.querySelector(".temp");
let feels = document.querySelector(".feels");
let desc = document.querySelector(".desc");
let icon = document.querySelector(".icon");
const newLocation = document.querySelector(".search");
const newLocBut = document.querySelector(".searchButton");

//API code from open weather map
const API_Code = "045024c045940c0f70d0f1e4dd3c9fef";

// get the location from Browser
navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  // save location in local storage for next using and pass data to other function
  localStorage.setItem("lat", lat);
  localStorage.setItem("lon", long);
});

// Find the weather data with lat and lon
function apiLatLon() {
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

      // for clear sky we don't need sun icon, because it's not working in night
      if (iconCode != "01n" && iconCode != "01d") {
        icon.src = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
      }
      // see the all output data of API in console
      // console.log(data);
    },
  };

  runAPI.setData(
    localStorage.getItem("lat"),
    localStorage.getItem("lon"),
    API_Code
  );
}

// Find the weather data with the city name
function apiCity() {
  let runAPIbyCity = {
    setData: function (city, code) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
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
      if (iconCode != "01n" && iconCode != "01d") {
        icon.src = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
      }
    },
  };

  runAPIbyCity.setData(localStorage.getItem("city"), API_Code);
}

apiLatLon();

newLocBut.addEventListener("click", () => {
  localStorage.setItem("city", newLocation.value);
  apiCity();
  console.log(newLocation.value);
});
