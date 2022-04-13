
let language = "Digite a linguagem de programação de seu interesse:";
const messageStudyYes = (technology) => `Muito bom! Continue estudando ${technology} e você terá muito sucesso.`;
const messageStudyNo = `Ahh que pena... Já tentou aprender outras linguagens?`;
const notValid = `Resposta não é válida`;
let messageRepeat = "";
const messageBye = `Boa sorte com os estudos`;
const notFound = `Não encontramos essa opção`;
const respostaFrontEnd = ["front", "frontend", "front-end"];
const respostaBackEnd = ["back", "backend", "back-end"];
const respostaRepeat = ["sim", "s", "si" ];


    let interest = prompt("Qual área você tem mais interesse? \n Frontend ou Backend").toLowerCase();
    let messageTech = `Que legal! Estude muito ${interest} e você terá muito sucesso.`;  
    let validationFrontEnd = respostaFrontEnd.some(elements => {
        if (interest.includes(elements)) {
        return true;
    }
        return false;
    }) 
    let validationBackEnd = respostaBackEnd.some(elements => {
        if(interest.includes(elements)) {
            return true;
        }
        return false;
    })
    
    if (validationFrontEnd) {
        interest = prompt ("Você quer aprender React ou Vue?").toLowerCase();
        alert(messageTech);
    };
    if (validationBackEnd) {
        interest = prompt ("Você quer aprender C# ou Java?").toLowerCase();
        alert(messageTech);
    };
    do {
    messageRepeat = prompt ("Deseja aprender outra linguagem de programação?").toLowerCase();
    if (messageRepeat != 'nao') {
        let technology = prompt(language);
        alert(messageStudyYes(technology)); 
    }
    } while (messageRepeat != 'nao');
alert(messageBye);