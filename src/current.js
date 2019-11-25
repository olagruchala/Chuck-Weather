
const apiKey = "c9c2007393ea74869a3499e9027762f6";
let city = "Thessaloniki"; //input.value -> toLowercase
// Thessaloniki - city with rain
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const { pressure, temp, humidity } = data.main;
    const { speed, deg } = data.wind;
    const { description } = data.weather[0];
    const rain = data.rain['1h'];
    // const snow = data.snow['1h'];
    console.log(pressure);
    console.log(temp);
    console.log(humidity);
    console.log(speed);
    console.log(deg);
    console.log(description);
    console.log(rain);
    // console.log(snow);
  });

