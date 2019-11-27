import "./styles.css";
import "./current";
import "./forecast.js";
import {jokes, jokesAPI} from "./chuckJokes.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import changeDiv from "./changeDiv.js"

jokes().then((res) => { document.getElementsByClassName('joke_square')[0].innerHTML = "<p>Żart z pliku JSON:</p>"+res+"<br>"; });
jokesAPI("UserName").then((res) => { document.getElementsByClassName('joke_square')[0].innerHTML += "<br><p>Żart z API:</p>"+res; });

changeDiv();
