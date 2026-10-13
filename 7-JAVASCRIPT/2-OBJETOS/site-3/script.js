const barra = document.getElementById('barra-energia')
const escanearBarra = document.getElementById('btn-usar')
const recarregarBarra = document.getElementById('btn-carga')


const sistema = {
    energia: 100,

    consumir() {
        this.energia = this.energia - 20;
        barra.style.width = this.energia + "%";
    },

    recarregar() {
        this.energia = 100;
        barra.style.width = this.energia + "%";
    }
}

escanearBarra.addEventListener('click', function () {
    sistema.consumir()
})

recarregarBarra.addEventListener('click', function () {
    sistema.recarregar()
})