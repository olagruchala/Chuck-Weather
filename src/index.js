import "./styles.css";
import jokes from "./chuckJokes.js";

jokes().then((res) => { console.log("Żart chuck`a, plik index.js: "+res); /* tutaj łapiemy element div, w którym mają być żarty i wpisujemy wartość res */ });

