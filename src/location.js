import {openWeatherApiKey} from "./config.js";
import {airQualityIndexKey} from "./config.js";

document.getElementById("geolocationBtn").addEventListener("click", () => {
    console.log('clik');
    let lon;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherApiKey}`;

            fetchWeatherByGeolocation(url);
            document.getElementById("secondpage").style.display = "none";
            document.getElementById("thirdpage").style.display = "block";
        })
    }

});

document.getElementById("confirmCityBtn").addEventListener("click", onSearchButtonClick); 
document.getElementById("city").addEventListener("keypress", onSearchInputKeypress);

function onSearchInputKeypress(e) {
    if (e.keyCode === 13) {
      const city = getSearchInputValue();
      fetchWeatherByCity(city);
    }
}

function onSearchButtonClick() {
    const city = getSearchInputValue();
    fetchWeatherByCity(city);
}
  
function getSearchInputValue() {
    return document.getElementById('city').value;
}

const fetchWeatherByCity = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openWeatherApiKey}`;
    const r = await fetch(url);
    const data = await r.json();
    setWeatherFromData(data);
    const res = await fetch(`https://api.waqi.info/feed/geo:${data.coord.lat};${data.coord.lon}/?token=${airQualityIndexKey}`);
    const aqiData = await res.json();
    setAqiFromData(aqiData);
}

const fetchWeatherByGeolocation = async (url) => {
    const r = await fetch(url);
    const data = await r.json();
    localStorage.setItem("city", data.name);
    setWeatherFromData(data);
    const res = await fetch(`https://api.waqi.info/feed/geo:${data.coord.lat};${data.coord.lon}/?token=${airQualityIndexKey}`);
    const aqiData = await res.json();
    setAqiFromData(aqiData);
}

function setAqiFromData(aqiData) {
    console.log(`aqi: ${aqiData.data.aqi}`);
    const aqi = aqiData.data.aqi;
    if(aqi<51)
    document.getElementById('current_aqi').innerHTML = `Air quality: <strong style="color:#009966">good</strong>`;
    else if (aqi<101)
    document.getElementById('current_aqi').innerHTML = `Air quality: <strong style="color:#ffde33">moderate</strong>`;
    else if (aqi<151)
    document.getElementById('current_aqi').innerHTML = `Air quality: <strong style="color:#ff9933">unhealthy for sensitive groups</strong>`;
    else if (aqi<201)
    document.getElementById('current_aqi').innerHTML = `Air quality: <strong style="color:#cc0033">unhealthy</strong>`;
    else if (aqi<300)
    document.getElementById('current_aqi').innerHTML = `Air quality: <strong style="color:#660099">very unhealthy</strong>`;
    else
    document.getElementById('current_aqi').innerHTML = `Air quality: <strong style="color:#7e0023">hazardous</strong>`;
 }

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
    document.getElementById('current_temp').innerHTML = `${temp.toFixed(1)}\u2103`;
    document.getElementById('current_description').innerHTML = `<strong>${description.toUpperCase()}</strong>`;
    document.getElementById('current_pressure').innerHTML = `Pressure: <strong>${pressure}hPa</strong>`;
    document.getElementById('current_wind').innerHTML = `Wind: <strong>${speed}km/h</strong>`;
    document.getElementById('current_humidity').innerHTML = `Humidity: <strong>${humidity}%</strong>`;
 }

 export default fetchWeatherByCity;
