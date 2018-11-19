let btn = document.querySelector('button.button');
let cityInput = document.querySelector('.input-text input');

let forecaster = weatherModel();

const ENTER_KEY_CODE  = 13;


// test
cityInput.value = 'homel';
forecaster.weatherForecast();
// end test

btn.addEventListener('click', () => {
    forecaster.weatherForecast();
});

cityInput.addEventListener('keypress', (e) => {    
    if (e.keyCode == ENTER_KEY_CODE) {
       forecaster.weatherForecast();
    }
});
