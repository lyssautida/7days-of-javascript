let secret = (10);
let guess = prompt("Adivinhe o número secreto: ");
let victoryMessage = `Você acertou o número secreto ${secret}. Parabéns!`;
const lossMessage = `Você errou o número secreto. Tente novamente!`;
if (guess == 10) {
    alert(victoryMessage);
} else {
alert(lossMessage)
}
console.log();