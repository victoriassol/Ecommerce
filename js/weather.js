const apiKey = "633be83f9e0521671ce8106c8b22a19b"; // Replace with your API key

const weatherData = document.querySelector("#weather-data");

const city = "Buenos Aires"; // Replace with your desired city name

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=${apiKey}`;

// Make API call using jQuery AJAX
$.ajax({
  url: url,
  dataType: "json",
})
  .then((data) => {
    // Success callback function
    console.log(data); // See the data in the console
    const cityName = data.name;
    const temp = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    weatherData.innerHTML = `
      <div class="weather-icon">
        <img src="${iconUrl}" alt="${description}" />
      </div>
      <div class="weather-info">
        <div class="city-name">${cityName}</div>
        <div class="temperature">${temp}°C</div>
        <div class="description">${description}</div>
      </div>
    `;
  })
  .catch((error) => {
    // Error callback function
    console.log(error); // See the error in the console
    weatherData.innerHTML = "No se pudo obtener la información del clima";
  });