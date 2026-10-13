const visor = document.getElementById("visor")
const Liberar = document.getElementById("btn-liberar")
const Bloquear = document.getElementById("btn-bloquear")



visor.addEventListener('mouseenter', function () {
    visor.style.backgroundColor = 'orange'
    visor.textContent = "Aguardando senha..."
});

visor.addEventListener('mouseleave', function () {
    visor.style.backgroundColor = 'gray'
    visor.textContent = "Sistema Ativo"
})


Liberar.addEventListener('click', function () {
    visor.style.backgroundColor = "green"
    visor.textContent = "Acesso Liberado"
})

Bloquear.addEventListener('click', function () {
    visor.style.backgroundColor = "red"
    visor.textContent = "Acesso Bloqueado!"
})
