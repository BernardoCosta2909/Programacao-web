const valorVelocidade = document.getElementById('valor-vel');
const statusTxt = document.getElementById('status-txt');
const btnFrear = document.getElementById('btn-frear');
const btnAcelerar = document.getElementById('btn-acelerar');

const radar = {
    velocidade: 40,
    limite: 60,

    alterarVelocidade(valor) {
        this.velocidade += valor;

        if (this.velocidade <= 0) {
            this.velocidade = 0;
            return "o carro está parado; não existe velocidade abaixo de zero!!";
        } else if (this.velocidade > this.limite) {
            return "ACIMA DO LIMITE!!!";
        } else {
            return "DENTRO DO LIMITE";
        }
    }
}

function atualizarTela(resposta) {
    valorVelocidade.textContent = radar.velocidade + " KM/H"
    statusTxt.textContent = resposta;

    if (resposta === "ACIMA DO LIMITE!!!") {
        valorVelocidade.style.color = 'red';
        statusTxt.style.color = 'red';
    } else if (resposta === "o carro está parado; não existe velocidade abaixo de zero!!") {
        valorVelocidade.style.color = 'gray';
        statusTxt.style.color = 'gray';
    }
    else {
        valorVelocidade.style.color = '#10b981';
        statusTxt.style.color = '#10b981';
    }
}

btnAcelerar.addEventListener('click', function () {
    let resposta = radar.alterarVelocidade(10);
    atualizarTela(resposta);
})

btnFrear.addEventListener('click', function () {
    let resposta = radar.alterarVelocidade(-10);
    atualizarTela(resposta);
})