const prompt = require("prompt-sync")();

console.log("Bem-vindo ao teste de hardware de computador!");

let pergtcorretas = 0;
const totalPerguntas = 3;

const pergunta1 = prompt("Qual é o cérebro do computador? ");
const pergunta1correta = "PROCESSADOR";

if (pergunta1.toUpperCase() === pergunta1correta) {
    console.log("Você Acertou!");
    pergtcorretas++;
} else {
    console.log("Você Errou. A resposta correta é: " + pergunta1correta);
}

const pergunta2 = prompt("Qual é o melhor AMD ou NVDIA? ");
const pergunta2correta = "AMD";

if (pergunta2.toUpperCase() === pergunta2correta) {
    console.log("Você Acertou!");
    pergtcorretas++;
} else {
    console.log("Você Errou. A resposta correta é: " + pergunta2correta);
}

const pergunta3 = prompt("Quem é a mâe da programaçao? ");
const pergunta3correta = "ADA LOVELACE";

if (pergunta3.toUpperCase() === pergunta3correta) {
    console.log("Você Acertou!");
    pergtcorretas++;
} else {
    console.log("Você Errou. A resposta correta é: " + pergunta3correta);
}

console.log("Você acertou", pergtcorretas, "perguntas corretas!");
console.log("Você Pontuou", Math.round((pergtcorretas / totalPerguntas) * 100), "porcento!");