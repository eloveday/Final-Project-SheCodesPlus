function changeForecast(response) {
  let getCityName = document.querySelector("#city-form");
  let newCityName = document.querySelector("#city-name");
  newCityName.innerHTML = getCityName.value;

  celsiusTemperature = response.data.main.temp;

  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(celsiusTemperature);

  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed) + "mph";

  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.weather[0].description;

  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = response.data.main.humidity + "%";

  let weatherIcon = document.querySelector("#icon");
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function getForecast(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let cityName = document.querySelector("#city-form");
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=b0c4e3d6536928938df05e87e36cbcb5&units=metric`;
  axios.get(apiURL).then(changeForecast);
}

function showFahrenheitTemp(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let temperatureElement = document.querySelector("#current-temperature");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function showCelsiusTemp(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", getForecast);

let now = new Date();
let currentDay = now.getDay();
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
let currentDate = now.getDate();
let currentMonth = now.getMonth();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let today = document.querySelector("#current-day");
today.innerHTML = days[currentDay];

let todaysDate = document.querySelector("#current-date");
todaysDate.innerHTML = currentDate;

let thisMonth = document.querySelector("#month");
thisMonth.innerHTML = months[currentMonth];

let hour = document.querySelector("#current-hour");
hour.innerHTML = currentHour;

let minute = document.querySelector("#current-minute");
minute.innerHTML = currentMinute;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);
