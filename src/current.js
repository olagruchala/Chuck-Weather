
const apiKey = "c9c2007393ea74869a3499e9027762f6";


// Class for the current weather
export default class Current {

  getWeatherByCityName(city) {
    fetch(`api.openweathermap.org/data/2.5/weather?q=${city}forecast?id=524901&APPID=${apiKey}`)
      .then(response => {
        return response.json();
       })
      .then(data => console.log(data))
  }
}


