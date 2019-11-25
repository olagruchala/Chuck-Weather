import "./styles.css";

let city = "Szczecin";

const apiKey = "c9c2007393ea74869a3499e9027762f6";
fetch(`api.openweathermap.org/data/2.5/weather?q=${city}forecast?id=524901&APPID=${apiKey}`)
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data));



