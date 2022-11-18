require('../styles/main.scss');
const { Weather } = require('./Weather')
const { UI } = require('./UI')
const { Store } = require('./store');

const storage = new Store();

const { ciudad, codigoPais } = storage.getLocationData();

const ui = new UI();

const weather1 = new Weather(ciudad, codigoPais);

async function fetchWeather(){

    const data = await weather1.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const ciudad = document.getElementById('ciudad').value;
    const codigoPais = document.getElementById('codigoPais').value;

    weather1.changeLocation(ciudad, codigoPais);

    storage.setLocationData(ciudad, codigoPais);
    fetchWeather();

    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', fetchWeather);