let nomeHeroi = "Eduardo"
let XP = -1

if (XP < 0){
  nivel = "Não é possivel um herói ter nível negativo ;)"
} else if
(XP < 1000) {
  nivel = "Ferro"
} else if (XP <= 2000) {
  nivel = "Bronze"
} else if (XP <= 5000) {
  nivel = "Prata"
} else if (XP <= 7000) {
  nivel = "Ouro"
} else if (XP <= 8000) {
  nivel = "Platina"
} else if (XP <= 9000) {
  nivel = "Ascendente"
} else if (XP <= 10000) {
  nivel = "Imortal"
} else {
  nivel = "Radiante"
}

if (XP < 0){
    console.log(nivel)
}else{
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)
}

/* Salve Felipe e equipe DIO!!
 tentando me desenvolver na area fazendo o bootcamp de logica muito top o curso Valeuu!!!
 */