let saldoVitorias = quantidade(60, 25)

    if (quantidade < 10){
        nivel = "Ferro"
    } else if (quantidade >= 11){
        nivel = "Bronze"
    } else if (quantidade >= 21){
        nivel = "Prata"
    } else if (quantidade >= 51){
        nivel = "Ouro"    
    } else if (quantidade >= 81){
        nivel = "Diamante"
    } else if (quantidade >= 91){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)

function quantidade(vitoria, derrota){
    let nivel = vitoria - derrota
    return nivel
}