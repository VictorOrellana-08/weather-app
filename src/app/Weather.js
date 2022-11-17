export class Weather {
    constructor(ciudad, codigoPais) {
        this.apikey = 'c5e4c169256342ba57b2b885e46bfebc';
        this.ciudad = ciudad;
        this.codigoPais = codigoPais;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},
        ${this.codigoPais}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;       
    }

    //Escucha al cambiar las propiedades.
    changeLocation(ciudad, codigoPais) {
        this.ciudad = ciudad;
        this.codigoPais = codigoPais;
    }
}