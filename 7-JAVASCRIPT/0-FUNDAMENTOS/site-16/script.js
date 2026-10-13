const dados = document.getElementById('dado-sensivel')
const alerta = document.getElementById('alerta-seguranca')

function alertaseguranca(evento) {

    evento.preventDefault();

    alerta.style.display = 'block';

}

function alertaseguranca2(evento) {

    evento.preventDefault();

    alerta.style.display = 'block';

    alerta.textContent = '⚠️ ALERTA: Tentativa de recorte bloqueada!';

}

dados.addEventListener('copy', alertaseguranca)

dados.addEventListener('cut', alertaseguranca2)

dados.addEventListener('paste', alertaseguranca2)