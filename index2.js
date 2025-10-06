let nomeHeroi = "Eduardo"
let XP = -2

switch (true) {
  case XP < 0:
    nivel = "Não é possível um herói ter nível negativo ;)"
    break

  case XP < 1000:
    nivel = "Ferro"
    break

  case XP <= 2000:
    nivel = "Bronze"
    break

  case XP <= 5000:
    nivel = "Prata"
    break

  case XP <= 7000:
    nivel = "Ouro"
    break

  case XP <= 8000:
    nivel = "Platina"
    break

  case XP <= 9000:
    nivel = "Ascendente"
    break

  case XP <= 10000:
    nivel = "Imortal"
    break

  default:
    nivel = "Radiante"
    break
}

if (XP < 0){
    console.log(nivel)
}else{
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)
}
