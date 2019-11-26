
const apiKey = "c9c2007393ea74869a3499e9027762f6";
let city = "Thessaloniki"; //input.value -> toLowercase
// Thessaloniki - city with rain
// Denver - city with snow
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const cityName = data.name;
    const { pressure, temp, humidity } = data.main;
    const { speed } = data.wind;
    const { description } = data.weather[0];
    let { rain, snow } = data;
    if (data.hasOwnProperty('rain')) {
        rain = data.rain['1h'];
    }
    if (data.hasOwnProperty('snow')) {
        snow = data.snow['1h'];
    }

    console.log('pressure : '+pressure);
    console.log('cityName : '+cityName);
    console.log('temp : '+temp);
    console.log('humidity : '+humidity);
    console.log('speed : '+speed);
    console.log('description : '+description);
    console.log('rain: ' + rain);
    console.log('snow: ' + snow);
  });

const temp = document.getElementById('temperature');
const icon = document.getElementById('icon');
const description = document.getElementById('description');
const pressure = document.getElementById('pressure');
const wind = document.getElementById('wind');
const rainfall = document.getElementById('rainfall');
