let container = document.querySelector('.info');
let error     = document.querySelector('.error');
let loader    = document.querySelector('.round');
let name      = document.querySelector('.city-name');
let weather   = document.querySelector('.weather');
let temp      = document.querySelector('.temp');
let press     = document.querySelector('.press');
let humudity  = document.querySelector('.humidity');
let wind      = document.querySelector('.wind');
let cloud     = document.querySelector('.cloud');
let coords    = document.querySelector('.coords');
let desc      = document.querySelector('.description');
let image     = document.querySelector('.image');

function changeInfo(response) {
    name.innerHTML     = response.name;
    weather.innerHTML  = response.weather[0].main;
    temp.innerHTML     = Math.round(response.main.temp - 273.15);
    press.innerHTML    = response.main.pressure;
    humudity.innerHTML = response.main.humidity;
    wind.innerHTML     = response.wind.speed;
    cloud.innerHTML    = response.clouds.all;
    desc.innerHTML     = '(' + response.weather[0].description + ')';
    coords.innerHTML   = '(' + response.coord.lon + '; ' + response.coord.lat + ')';
    image.src          = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png';
}

function showError(errorText) {
    error.innerHTML = errorText;
    error.classList.add('error-visible');
    cityInput.classList.add('input-error');
    
    stopLoader();
}

function hideError() {
    if (error.classList.contains('error-visible')) {        
        error.classList.remove('error-visible');
        cityInput.classList.remove('input-error');
    }
}

function startLoader() {
    loader.classList.add('round-animation');
}
function stopLoader() {
    loader.classList.remove('round-animation');
}

function showWeatherForecast () {
    if (!error.classList.contains('info-visible')) {
        container.classList.add('info-visible');
    }    
}