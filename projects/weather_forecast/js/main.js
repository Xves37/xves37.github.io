let btn       = document.querySelector('button.button');
let cityInput = document.querySelector('.city-input');
let error     = document.querySelector('.error');
let loader    = document.querySelector('.round');
let conteiner = document.querySelector('.info');

let name     = document.querySelector('.city-name');
let weather  = document.querySelector('.weather');
let temp     = document.querySelector('.temp');
let press    = document.querySelector('.press');
let humudity = document.querySelector('.humidity');

btn.addEventListener('click', () => ajaxGet(cityInput.value));
cityInput.addEventListener('keypress', (e) => {

    if (e.keyCode == 13) {
        ajaxGet(cityInput.value);
    }

})

function ajaxGet(city) {

    let request = new XMLHttpRequest();

    loader.classList.add('round-animation');

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {

            conteiner.classList.add('info-visible');
            let response = JSON.parse(request.responseText);
            console.log(response);
            changeInfo(response);
            wrongInputBack();
            loader.classList.remove('round-animation');

        } else if (request.readyState == 4 && request.status == 404) {
            wrongInput('You entered wrong city!')
            loader.classList.remove('round-animation');
        } else if (request.readyState == 4) {
            wrongInput('Enter something!')
            loader.classList.remove('round-animation');
        }
    }

    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ef5ffdb295f9241df26ba3b904510af5');
    request.send();

}

function changeInfo(response) {
    name.innerHTML     = response.name;
    weather.innerHTML  = response.weather[0].main;
    temp.innerHTML     = Math.round(response.main.temp - 273.15);
    press.innerHTML    = response.main.pressure;
    humudity.innerHTML = response.main.humidity;
}

function wrongInput(errorText) {
    error.innerHTML = errorText;
    error.classList.add('error-visible');
    cityInput.classList.add('input-error');
}

function wrongInputBack() {
    error.classList.remove('error-visible');
    cityInput.classList.remove('input-error');
}
