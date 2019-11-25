const forecast = (cityName) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e87a11268be0c46ef77d272eeef4198d&units=metric`)
    .then(resp => {
        return resp.json();
    })
    .then (resp => {
        data(resp);
    })
}

const data = (result) => {
    console.log(result);
}

document.getElementById('button').addEventListener('click', () => {
    let cityName = document.getElementById('search').value;
    if(cityName) {
        forecast(cityName);
    }
})
