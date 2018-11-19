function weatherView() {
    let city  = document.querySelector('.city');
    let week  = document.querySelector('.week');
    let today = document.querySelector('.today');

    function changeCity (response) {
        let cityName = response.name;
        let countryCode = response.sys.country;
        let coords = response.coord.lon + '; ' + response.coord.lat;

        let cityPattern = 
            '<h2 class="city-name">' +
                '<span class="name">' + cityName + '</span>,' +
                '<span class="country"> ' + countryCode + '</span>' +
            '</h2>' +
            '<div class="coords">(' + coords + ')</div>' +
            '<img class="flag" src="https://www.countryflags.io/' + countryCode + '/shiny/32.png"></img>';

        city.innerHTML = cityPattern;    
    }

    function changeWeatherToday(response) {
        let temp = Math.round(response.main.temp - 273.15);
        let date = (new Date).toString().slice(0,25);
        let desc = response.weather[0].description.toString()[0].toUpperCase() + response.weather[0].description.slice(1);
        let humidity = response.main.humidity;
        let pressure = response.main.pressure;
        let windSpeed = response.wind.deg;
        let clouds = response.clouds.all;
        let icon = parseImg(response.weather[0].icon);



        let weatherTodayPattern =
            '<header>' +
                '<div class="today-date">' + date + '</div>' +
            '</header>' +
            '<div class="today-weather">' +
                '<div class="today-main">' +
                    '<div class="temp-icon-wrap">' +
                        '<div class="today-temp">' + temp + '°C</div>' +
                        '<img class="today-icon" src="img/' + icon + '.png" alt="Weather Icon"></img>' +
                    '</div>' +
                    '<div class="today-description">' + desc + '</div>' +
                '</div>' +
                '<aside>' +
                    '<ul>' +
                        '<li class="humidity">' + humidity + '%</li>' +
                        '<li class="pressure">' + pressure + ' hPa</li>' +
                        '<li class="wind">' + windSpeed + ' m/s</li>' +
                        '<li class="clouds">' + clouds + '%</li>' +
                    '</ul>' +
                '</aside>' +
            '</div>';

        today.innerHTML = weatherTodayPattern;
    }

    function parseImg(iconCode) {
        if (iconCode == '03d' || iconCode == '03n' || iconCode == '04n' || iconCode == '04d') {
            return '03d';
        } else if (iconCode == '09d' || iconCode == '09n') {
            return '09d';
        } else if (iconCode == '10d' || iconCode == '10n') {
            return '10d';
        } else if (iconCode == '11d' || iconCode == '11n') {
            return '11d';
        } else if (iconCode == '13d' || iconCode == '13n') {
            return '13d';
        } else if (iconCode == '50d' || iconCode == '50n') {
            return '50d';
        } else {
            return iconCode;
        }
    }

    // function createSelectedByDayPattern() {

    // }

    // function createSelectedByTimePattern() {
        
    // }

    // function changeSelectedWeather() {

    // }

    // <header>
    //     <ul class="timeline">
    //         <li class="time-1"></li>
    //         <li class="time-2"></li>
    //         <li class="time-3"></li>
    //         <li class="time-4"></li>
    //         <li class="time-5"></li>
    //         <li class="time-6"></li>
    //         <li class="time-7"></li>
    //         <li class="time-8"></li>
    //     </ul>
    // </header>
    // <div class="main-weather" data-time='9.00'>
    //     <div class="main-temp"></div>
    //     <div class="main-icon"></div>
    //     <br>
    //     <div class="main-description"></div>
    // </div>
    // <aside>
    //     <ul>
    //         <li class="humidity"></li>
    //         <li class="pressure"></li>
    //         <li class="wind"></li>
    //         <li class="clouds"></li>                        
    //     </ul>
    // </aside>

    // function changeWeek (response) {
    //     let fullWeekPattern = '';

    //     for (let i = 1; i < 6; i++) {

    //     }
    // }

    // function createDayPattern() {
    //     let dayPattern =
    //         '<div class="day-1">' +
    //             '<div class="day-and-data">' +
    //                 '<div class="day-name"></div>' +
    //                 '<div class="data"></div>' +
    //             '</div>' +
    //             '<div class="weather-little">' +
    //                 '<div class="week-temp"></div>' +
    //                 '<div class="week-icon"></div>' +
    //             '</div>' +
    //         '</div>';

    //     return dayPattern;
    // }

    return {
        changeCity: changeCity,
        changeWeatherToday: changeWeatherToday
    }
}
