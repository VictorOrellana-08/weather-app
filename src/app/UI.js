export class UI {
    constructor() {
        this.location = document.querySelector('#weather-ubicacion');
        this.desc = document.querySelector('#weather-descripcion');
        this.string = document.querySelector('#weather-string');
        this.humd = document.querySelector('#weather-humedad');
        this.vnt = document.querySelector('#weather-viento');
    }

    render(weather) {
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.string.textContent = weather.main.temp + ' °C';
        this.humd.textContent = 'Humedad: ' + weather.main.humidity + ' %';
        this.vnt.textContent = 'Viento: ' + weather.wind.speed + ' m/s'; 
    };
}