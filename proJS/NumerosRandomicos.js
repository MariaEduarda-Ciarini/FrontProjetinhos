///  Adivinhador de números aleatórios
const prompt = require("prompt-sync")();
const alvo = Math.round(Math.random() * 100);

let suposis = 0;

while (true) {
    suposis++;

    const adivinhe = Number(prompt("Adivinhe o número de(0-100): "));
    if (adivinhe > alvo) {
        console.log("Seu palpite é muito alto.");
        continue;
    } else if (adivinhe < alvo) {
        console.log("Seu palpite é muito baixo.");
        continue;
    }
    
    console.log("Você adivinhou!");
    break;
}

console.log("Você adivinhou o número", suposis, "de palpites!");