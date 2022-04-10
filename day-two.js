
let name = prompt("Digite seu nome:");
let age = prompt("Digite sua idade:");
let language = prompt("Digite a linguagem de programação de seu interesse:");
const messageHello = `Olá ${name}, sua idade é ${age} e já está estudando ${language}`;
const messageStudyYes = `Muito bom! Continue estudando ${language} e você terá muito sucesso.`;
const messageStudyNo = `Ahh que pena... Já tentou aprender outras linguagens?`;
const respostasCorretas = ["sim", "SIM","s"];
const respostasIncorretas = ["não", "nao", "n"];

alert(messageHello);
let messageStudy = prompt(`Você gosta de estudar ${language}?`);
const validationYes = respostasCorretas.some(element => {
    if (messageStudy.includes(element)) {
        alert(messageStudyYes);
    }
}
)
const validationNo = respostasIncorretas.some(element => {
    if (messageStudy.includes(element)) {
        alert(messageStudyNo);
    }
}
)   
contains;
contain;