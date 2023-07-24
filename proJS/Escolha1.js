const prompt = require("prompt-sync")();

const resposta = prompt("Você gostaria de jogar (sim/não)?")

if (resposta.toLowerCase() === "sim") {

    const resposta2 = prompt("Você gostaria de ir para a esquerda ou ir para a direita (esquerda/direita)? ")

    if (resposta2 === "esquerda") {
        console.log("Oopa! Você escolheu a esquerda! agora enfrente o nine fingers squid!");
    } else {
        ///direita
        console.log("Ops! Você escolheu a direita! enfrente com Bolsonaru!");

        const resposta3 = prompt("Você gostaria de pular esta tarefa (sim/não)?");

        if (resposta3 === "sim") {
            console.log("Humilde!");
        } else {
            console.log("Alienado");
        }
    }

} else {
    console.log("Isso pode ser ruim, mas aproveite!");
}
