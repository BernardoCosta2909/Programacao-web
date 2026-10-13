const criptomoedas = document.getElementById('tela-saldo')
const chipsDeMemoria = document.getElementById('tela-chips')
const botao = document.getElementById('btn-comprar')
const botaoCompra = document.getElementById('btn-vender')

const carteira = {
    saldo: 200,
    chips: 0,

    comprarChip() {
        if (this.saldo >= 50) {
            this.saldo = this.saldo - 50;
            this.chips = this.chips + 1;
            criptomoedas.textContent = this.saldo;
            chipsDeMemoria.textContent = this.chips;
        } else {
            alert("Saldo insuficiente!!!");
        }
    },

    venderChip() {

        if(this.chips <= 0) {
            alert("Chips insuficientes!!!")
        } else {
         this.saldo = this.saldo + 100;
         criptomoedas.textContent = this.saldo;
         this.chips = this.chips - 1;
         chipsDeMemoria.textContent = this.chips;
        }
    }
}

botao.addEventListener('click', function () {
    carteira.comprarChip()
})

botaoCompra.addEventListener('click', function () {
    carteira.venderChip()
})