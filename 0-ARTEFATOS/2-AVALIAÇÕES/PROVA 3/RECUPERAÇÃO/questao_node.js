barragem = {
    nome: "Barragem Oeste",
    nivelAtual: 40,
    nivelAlerta: 80,
}

console.log("\nBarragem: " + barragem.nome + ", nível atual: " + barragem.nivelAtual + "%")

for (let i = 1; i <= 4; i++) {
    let horas = i * 5;
    barragem.nivelAtual += horas;

    if (barragem.nivelAtual >= barragem.nivelAlerta) {
        console.log("\nALERTA: Nível da barragem acima do recomendado, ACIONANDO DEFESA CIVIL!!!");
        break
    } else {
        console.log("\nHoras monitoradas: " + i + ". Nível atual da barragem: " + barragem.nivelAtual + "%")
    }
}