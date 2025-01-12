//Desafio 1 - Classificador de nível de herói
//Dev: Hastror Lima
//Data: 12/01/2025

//Variáveis
let nameUser = ["Arthur, The Destroyer", "Carlos, O grande", "Kaian", "Jasper"]
let xpUser = [2567, 6789, 897, 9999]
let xpClassification

//Laço de Repetição
for (let i = 0; i < nameUser.length; i++){

    let name = nameUser[i]
    let xp = xpUser[i]

    //Estrutura de Decisão
    if (xp <= 1000){
        xpClassification = "Ferro"
    }
    else if (xp >= 1001 && xp < 2000){
        xpClassification = "Bronze"
    }
    else if (xp >= 2001 && xp < 5000){
        xpClassification = "Prata"
    }
    else if (xp >= 5001 && xp < 7000){
        xpClassification = "Ouro"
    }
    else if (xp >= 7001 && xp < 8000){
        xpClassification = "Platina"
    }
    else if (xp >= 8001 && xp < 9000){
        xpClassification = "Ascendente"
    }
    else if (xp >= 9001 && xp < 10000){
        xpClassification = "Imortal"
    }
    else if (xp >= 10001){
        xpClassification = "Radiante"
    }
    console.log("O herói de nome " + name + " está no nível de " + xpClassification)
}