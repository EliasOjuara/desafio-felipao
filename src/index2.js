let saldoVitorias = calcularNivel(150, 25)

    if (calcularNivel < 10){
        nivel = "Ferro"
    } else if (calcularNivel >= 11 && calcularNivel <= 20){
        nivel = "Bronze"
    } else if (calcularNivel >= 21 && calcularNivel <= 50){
        nivel = "Prata"
    } else if (calcularNivel >= 51 && calcularNivel <= 80){
        nivel = "Ouro"    
    } else if (calcularNivel >= 81 && calcularNivel <= 90){
        nivel = "Diamante"
    } else if (calcularNivel >= 91 && calcularNivel <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)

function calcularNivel(vitoria, derrota){
    let nivel = vitoria - derrota
    return nivel
}