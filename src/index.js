import "./styles.css";
import "./current";
import {jokes, jokesAPI} from "./chuckJokes.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import changeDiv from "./changeDiv.js"

jokes().then((res) => { document.getElementsByClassName('joke_square')[0].innerHTML = "<p>Żart z pliku JSON:</p>"+res+"<br>"; });
jokesAPI("UserName").then((res) => { document.getElementsByClassName('joke_square')[0].innerHTML += "<br><p>Żart z API:</p>"+res; });
const apiKey = '';

changeDiv();
window.addEventListener("load", () => {
    let lon;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(r => r.json())
            .then(data => console.log(data));
        });  
    }  
});

document.getElementById("button").addEventListener("click", onSearchButtonClick); 
document.getElementById("search").addEventListener("keypress", onSearchInputKeypress);

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
    return document.getElementById('search').value;
};

function fetchWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(r => r.json())
        .then(data => console.log(data));
};