import "./styles.css";
import {jokes, jokesAPI} from "./chuckJokes.js";

jokes().then((res) => { console.log("Żart chuck`a, plik index.js: "+res); /* tutaj łapiemy element div, w którym mają być żarty i wpisujemy wartość res */ });
jokesAPI("UserName").then((res) => { console.log("Żart chuck`a, zewnętrzne API: "+res); /* tutaj łapiemy element div, w którym mają być żarty i wpisujemy wartość res */ });
