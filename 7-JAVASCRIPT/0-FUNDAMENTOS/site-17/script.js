const body = document.body;
const icone = document.getElementById('icone')
const mensagem = document.getElementById('mensagem')



function dispararAlarme(evento) {

    body.style.backgroundColor = 'darkred';
    mensagem.textContent = 'TENTATIVA DE FUGA DETECTADA!!!'
    icone.textContent = '😠'

}

function normalizarSistema(evento) {

    body.style.backgroundColor = '#0f172a';
    mensagem.textContent = 'Monitorando...'
    icone.textContent = '🤔'
    
}

window.addEventListener('blur', dispararAlarme)

document.addEventListener('mouseleave', dispararAlarme)

window.addEventListener('focus', normalizarSistema)

document.addEventListener('mouseenter', normalizarSistema)