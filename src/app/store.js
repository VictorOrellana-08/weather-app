export class Store {

    constructor() {
        this.cuidad;
        this.codigoPais;
        this.defaultCiudad = 'El Salvador';
        this.defaultCodigo = 503;
    }

    getLocationData() {
        if(localStorage.getItem('ciudad') === null) {
            this.cuidad = this.defaultCiudad;
        } else {
            this.cuidad = localStorage.getItem('ciudad');
        }

        if(localStorage.getItem('codigoPais') === null) {
            this.codigoPais = this.defaultCodigo;
        } else {
            localStorage.getItem('codigoPais');
        }

        return {
            ciudad: this.cuidad,
            codigoPais: this.codigoPais
        }
    }

    setLocationData(cuidad, codigoPais) {
        localStorage.setItem('ciudad', cuidad);
        localStorage.setItem('codigoPais', codigoPais);
    }
}