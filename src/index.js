function showCurrentWeather(event) {
  event.preventDefault();
  let newCityName = document.querySelector("#city-form");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = newCityName.value;
}

let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", showCurrentWeather);
