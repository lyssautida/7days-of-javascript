let name = prompt("Digite seu nome:");
let age = prompt("Digite sua idade:");
let language = prompt("Digite a linguagem de programação de seu interesse:");
const messageHello = `Olá ${name}, sua idade é ${age} e já está estudando ${language}`;
const messageStudyYes = `Muito bom! Continue estudando e você terá muito sucesso.`;
const messageStudyNo = `Ahh que pena... Já tentou aprender outras linguagens?`;

alert(messageHello);
let messageStudy = prompt(`Você gosta de estudar ${language}?`);
if (messageStudy == "sim" || 's' || 'S' || 'SIM') {
alert(messageStudyYes);
}else if(messageStudy == 'não' || 'n' || 'não' || 'NÃO' || 'NAO' || 'N') {
alert(messageStudyNo);  
}
