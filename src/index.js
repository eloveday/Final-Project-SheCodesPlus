function changeForecast(response) {
  let getCityName = document.querySelector("#city-form");
  let newCityName = document.querySelector("#city-name");
  newCityName.innerHTML = getCityName.value;

  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(response.data.main.temp);
}

function getForecast(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-form");
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=b0c4e3d6536928938df05e87e36cbcb5&units=metric`;
  axios.get(apiURL).then(changeForecast);
}

let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", getForecast);
