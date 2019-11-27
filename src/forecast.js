//forecast by city name

const forecast = (cityName) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e87a11268be0c46ef77d272eeef4198d&units=metric`)
    .then(resp => {
        return resp.json();
    })
    .then (resp => {
        data(resp);
    })
}

//temperature + icons for each day

const data = (result) => {
 console.log(result);

 let img1 = document.createElement("img");
 document.getElementById('forecastDay1').innerText = Math.floor(result.list[8].main.temp)+" °C ";
 let iconDay1 = result.list[8].weather[0].icon;
 img1.src=`http://openweathermap.org/img/wn/${iconDay1}@2x.png`;
 document.getElementById('forecastDay1').appendChild(img1);

 let img2 = document.createElement("img");
 document.getElementById('forecastDay2').innerText = Math.floor(result.list[16].main.temp)+" °C ";
 let iconDay2 = result.list[16].weather[0].icon;
 img2.src=`http://openweathermap.org/img/wn/${iconDay2}@2x.png`;
 document.getElementById('forecastDay2').appendChild(img2);

 let img3 = document.createElement("img");
 document.getElementById('forecastDay3').innerText = Math.floor(result.list[24].main.temp)+" °C ";
 let iconDay3 = result.list[24].weather[0].icon;
 img3.src=`http://openweathermap.org/img/wn/${iconDay3}@2x.png`;
 document.getElementById('forecastDay3').appendChild(img3);

 let img4 = document.createElement("img");
 document.getElementById('forecastDay4').innerText = Math.floor(result.list[32].main.temp)+" °C ";
 let iconDay4 = result.list[32].weather[0].icon;
 img4.src=`http://openweathermap.org/img/wn/${iconDay4}@2x.png`;
 document.getElementById('forecastDay4').appendChild(img4);

 let img5 = document.createElement("img");
 document.getElementById('forecastDay5').innerText = Math.floor(result.list[39].main.temp)+" °C ";
 let iconDay5 = result.list[39].weather[0].icon;
 img5.src=`http://openweathermap.org/img/wn/${iconDay5}@2x.png`;
 document.getElementById('forecastDay5').appendChild(img5);
}

document.getElementById('confirmCityBtn').addEventListener('click', () => {
    let cityName = document.getElementById('city').value;
    if(cityName) {
        forecast(cityName);
    }
})

// dates

const day1Date = new Date();
day1Date.setDate(day1Date.getDate()+1);
const day2Date = new Date();
day2Date.setDate(day2Date.getDate()+2);
const day3Date = new Date();
day3Date.setDate(day3Date.getDate()+3);
const day4Date = new Date();
day4Date.setDate(day4Date.getDate()+4);
const day5Date = new Date();
day5Date.setDate(day5Date.getDate()+5);


document.getElementById('day1').innerText = `${day1Date.getDate()}.${day1Date.getMonth()+1}.${day1Date.getFullYear()}`;
document.getElementById('day2').innerText = `${day2Date.getDate()}.${day2Date.getMonth()+1}.${day2Date.getFullYear()}`;
document.getElementById('day3').innerText = `${day3Date.getDate()}.${day3Date.getMonth()+1}.${day3Date.getFullYear()}`;
document.getElementById('day4').innerText = `${day4Date.getDate()}.${day4Date.getMonth()+1}.${day4Date.getFullYear()}`;
document.getElementById('day5').innerText = `${day5Date.getDate()}.${day5Date.getMonth()+1}.${day5Date.getFullYear()}`;
