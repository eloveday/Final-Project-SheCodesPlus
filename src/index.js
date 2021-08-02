function displayForecast() {
  let forecastElement = document.querySelector("#forecast")

  
let forecastHTML = `<div class="row">`

days.forEach(function(day){
forecastHTML = forecastHTML +`
  
        <div class="col-2">
        <div class="weather-forecast-date">${day}</div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> 18° </span>
          <span class="weather-forecast-temperature-min"> 10° </span>
        </div>
      `
forecastHTML = forecastHTML + `</div>`;})
forecastElement.innerHTML = forecastHTML;

}

function getForecast(){
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=b0c4e3d6536928938df05e87e36cbcb5`;
axios.get(apiURL).then(displayForecast)
}


function changeWeather(response) {
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

function getWeather(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let cityName = document.querySelector("#city-form");
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=b0c4e3d6536928938df05e87e36cbcb5&units=metric`;
  axios.get(apiURL).then(changeWeather);

  getForecast(response.data.coord);
}




let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", getWeather);

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

getForecast();


