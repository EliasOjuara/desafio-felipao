// Solicita o nome e a quantidade de experiência (XP) do herói
const nome = "Chico"
let xp = "1001"

// Usa uma estrutura de decisão para determinar o nível com base na quantidade de XP
let nivel = ""

if (xp < 1000) {
    nivel = "Ferro"
} else if (xp <= 2000) {
    nivel = "Bronze"
} else if (xp <= 5000) {
    nivel = "Prata"
} else if (xp <= 7000) {
    nivel = "Ouro"
} else if (xp <= 8000) {
    nivel = "Platina"
} else if (xp <= 9000) {
    nivel = "Ascendente"
} else if (xp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

// Exibe a mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nome,"está no nível de " + nivel)