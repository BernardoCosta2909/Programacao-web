const div = document.querySelector('.painel')
const icone = document.getElementById('icone-cadeado')
const botao = document.getElementById('btn-trava')

const porta = {
    trancada: true,

    alternarTrava() {
        if (this.trancada === true) {
            this.trancada = false;
            icone.textContent = '🔓';
            div.style.backgroundColor = 'green';
        } else {
            this.trancada = true;
            icone.textContent = '🔒';
            div.style.backgroundColor = 'red';
        }
    }
}

botao.addEventListener('click', function () {
    porta.alternarTrava()
})