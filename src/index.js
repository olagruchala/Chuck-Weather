import "./styles.css";
import {jokes, jokesAPI} from "./chuckJokes.js";

jokes().then((res) => { console.log("Żart chuck`a, plik index.js: "+res); /* tutaj łapiemy element div, w którym mają być żarty i wpisujemy wartość res */ });
jokesAPI("UserName").then((res) => { console.log("Żart chuck`a, zewnętrzne API: "+res); /* tutaj łapiemy element div, w którym mają być żarty i wpisujemy wartość res */ });


//LocalStorage
//Jeżeli localStorage jest pusty to wyświetl input. Jeszcze trzeba pamiętać o tym, że gdy jest użytkownik to pominąć wybór miasta
//Aby zmienić imię/miasto wystarczy wywołać funkcję z odpowiednim parametrem np. localStorageChange('user','chuck');
//Aby odczytac wartosc z localStorage: window.localStorage['parametr']
function localStorage()
{
    if(window.localStorage['user']===undefined)
    {
        //Wyświetlamy pole input
        console.log("input");
    }
    else{
        //Wyświetlamy imie użytkownika
        console.log("imie użytkownia z localStorage");
    }
}

function localStorageChange(storageKey, value)
{
    window.localStorage.setItem(storageKey, value);
}

localStorage();