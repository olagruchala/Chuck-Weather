
const apiKey = "c9c2007393ea74869a3499e9027762f6";
let city = "saint paul"; //input.value
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const cityName = data.name;
    const { pressure, temp, humidity } = data.main;
    const { speed } = data.wind;
    const { description } = data.weather[0];
    let { rain, snow } = data;
    if (data.hasOwnProperty('rain')) {
        rain = data.rain['1h'];
        document.getElementById('current_rainfall').innerHTML = `Rain: <strong>${rain}mm </strong><small style="color:gray;"><sup>*</sup>in last 1h</small>`
    }
    if (data.hasOwnProperty('snow')) {
        snow = data.snow['1h'];
        document.getElementById('current_rainfall').innerHTML = `Snow: <strong>${snow}mm </strong><small style="color:gray;"><sup>*</sup>in last 1h</small>`
    }
    document.getElementById('cityName').innerHTML = cityName;
    document.getElementById('current_temp').innerHTML = `${temp.toFixed(1)} \u2103`;
    document.getElementById('current_description').innerHTML = `<strong>${description.toUpperCase()}</strong>`;
    document.getElementById('current_pressure').innerHTML = `Pressure: <strong>${pressure}hPa</strong>`;
    document.getElementById('current_wind').innerHTML = `Wind: <strong>${speed}km/h</strong>`;
    document.getElementById('current_humidity').innerHTML = `Humidity: <strong>${humidity}%</strong>`;
 });
