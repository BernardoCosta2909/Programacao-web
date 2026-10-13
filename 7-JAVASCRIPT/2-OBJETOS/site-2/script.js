const nomeOriginal = document.getElementById('nome-tela')
const btnAcionar = document.getElementById('btn-xp')
const visorNivel = document.getElementById('valor-nivel')



const jogador = {
    nome: "Michelangelo",
    nivel: 1,

    subirDeNivel() {
        this.nivel++;
        visorNivel.textContent = this.nivel;
        nomeOriginal.textContent = this.nome;
    }
}

btnAcionar.addEventListener('click', function () {
    jogador.subirDeNivel()
})