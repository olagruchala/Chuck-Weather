import "./styles.css";
import "./location";
import {jokesAPI} from "./chuckJokes.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import changeDiv from "./changeDiv.js"

let userName = window.localStorage['user'];
// jokes().then((res) => { document.getElementsByClassName('joke_square')[0].innerHTML = "<p>Żart z pliku JSON:</p>"+res+"<br>"; });
jokesAPI(userName)
  .then((res) => {document.getElementsByClassName('joke_square')[0].innerHTML += `<p>${res}</p>`});

changeDiv();
