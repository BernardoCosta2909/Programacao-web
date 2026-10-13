const nave = document.getElementById("nave");

let posicaox = 180;
let posicaoy = 180;

document.addEventListener('keydown', function (evento) {

    if (evento.key === "ArrowUp") {
        posicaoy = posicaoy - 20
    } else if (evento.key === "ArrowDown") {
        posicaoy = posicaoy + 20
    } else if (evento.key === "ArrowRight") {
        posicaox = posicaox + 20
    } else if (evento.key === "ArrowLeft") {
        posicaox = posicaox - 20
    }

    nave.style.top = posicaoy + 'px'

    nave.style.left = posicaox + 'px'

})
