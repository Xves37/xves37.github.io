let btn = document.querySelector('button.button');
let cityInput = document.querySelector('.city-input');
let response;

btn.addEventListener('click', () => ajaxGet(cityInput.value))

function ajaxGet(city) {

    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            response = JSON.parse(request.responseText);
            console.log(response)
        } else if (request.readyState == 4 && request.status == 404) {
            console.log('You entered wrong city')
        }
    }

    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ef5ffdb295f9241df26ba3b904510af5');
    request.send();

}

