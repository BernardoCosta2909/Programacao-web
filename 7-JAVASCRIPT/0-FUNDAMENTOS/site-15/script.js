const caixa = document.getElementById("caixa-arquivo")
const icone = document.getElementById("icone")
const mensagem = document.getElementById("nome-arquivo")

caixa.addEventListener('click', function () {
    caixa.style.borderColor = 'blue';
})

caixa.addEventListener('dblclick', function () {
    caixa.style.backgroundColor = 'green';
    caixa.style.borderColor = 'green';

    icone.textContent = '🔓';
    mensagem.textContent = 'Arquivo Liberado!!';
    mensagem.style.color = 'white';

});
