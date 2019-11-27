import {openWeatherApiKey} from "./config.js";

document.getElementById("geolocationBtn").addEventListener("click", () => {
    let lon;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherApiKey}`;

        fetch(url)
            .then(r => r.json())
            .then(data => setWeatherFromData(data));
        });  
    }  
});

document.getElementById("confirmCityBtn").addEventListener("click", onSearchButtonClick); 
document.getElementById("city").addEventListener("keypress", onSearchInputKeypress);

function onSearchInputKeypress(e) {
    if (e.keyCode === 13) {
      const city = getSearchInputValue();
      fetchWeatherByCity(city);
    };
};

function onSearchButtonClick() {
    const city = getSearchInputValue();
    fetchWeatherByCity(city);
};
  
function getSearchInputValue() {
    return document.getElementById('city').value;
};

function fetchWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}`;

    fetch(url)
        .then(r => r.json())
        .then(data => setWeatherFromData(data));
};

function setWeatherFromData(data) {
    console.log(data);
    const cityName = data.name;
    const { pressure, temp, humidity } = data.main;
    const { speed } = data.wind;
    const { description, icon } = data.weather[0];
    console.log(icon);
    let { rain, snow } = data;
    if (data.hasOwnProperty('rain')) {
        rain = data.rain['1h'];
        document.getElementById('current_rainfall')
          .innerHTML = `Rain: <strong>${rain}mm </strong><small style="color:gray;"><sup>*</sup>in last 1h</small>`
    }
    if (data.hasOwnProperty('snow')) {
        snow = data.snow['1h'];
        document.getElementById('current_rainfall')
          .innerHTML = `Snow: <strong>${snow}mm </strong><small style="color:gray;"><sup>*</sup>in last 1h</small>`
    }
    document.getElementById('current_icone').innerHTML = `<img width="180%" src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
    document.getElementById('cityName').innerHTML = cityName;
    document.getElementById('current_temp').innerHTML = `${temp.toFixed(1)} \u2103`;
    document.getElementById('current_description').innerHTML = `<strong>${description.toUpperCase()}</strong>`;
    document.getElementById('current_pressure').innerHTML = `Pressure: <strong>${pressure}hPa</strong>`;
    document.getElementById('current_wind').innerHTML = `Wind: <strong>${speed}km/h</strong>`;
    document.getElementById('current_humidity').innerHTML = `Humidity: <strong>${humidity}%</strong>`;
 }