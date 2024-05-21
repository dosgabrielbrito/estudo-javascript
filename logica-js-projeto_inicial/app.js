//--------------------------------------
//Projeto:

alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroUsuario;
let numeroTentativas = 1;

//Enquanto o número escolhindo não for igual ao secreto:
while (numeroUsuario != numeroSecreto) {

    //Solicitar número para o usuário:
    numeroUsuario = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //Se o chute for igual ao núemro screto:
    if (numeroUsuario == numeroSecreto) {
        //Acerto do usuário:
        break;
    } else {
        //Tratar erro do usuário:
        if (numeroUsuario < numeroSecreto) {
            alert(`O número secreto é maior do que ${numeroUsuario}.`);
        } else {
            alert(`O número secreto é menor do que ${numeroUsuario}.`);
        }
        //Incrementar tentativas:
        numeroTentativas++
    }
}

//Frase final:
let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${numeroTentativas} ${palavraTentativa}.`);

//--------------------------------------
//Exercícios 01:

// alert('Boas vindas ao nosso site!');

// let nome = 'Lua';

// let idade = 25;

// let numeroDeVendas = 50;

// let saldoDisponivel = 1000;

// alert('Erro! Preencha todos os campos');

// let mensagemErro = 'Erro! Preencha todos os campos';

// alert(mensagemErro);

// nome = prompt('Qual o seu nome?');

// idade = prompt('Qual a sua idade?');

// if (idade >= 18) {
//     alert('Já pode tirar sua habilitação!');
// }

//--------------------------------------
//Exercícios 02:

// let diaDaSemana = prompt('Que dia da semana é hoje?');

// if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// }

// let numeroUsuario = prompt('Digite um número.');

// if (numeroUsuario < 0) {
//     alert('O número ' + numeroUsuario + ' é negativo.');
// } else {
//     alert('O número ' + numeroUsuario + ' é positivo ou nulo.');
// }

// let scoreUsuario = prompt('Qual a sua pontuação?');

// if (scoreUsuario >= 100) {
//     alert('Parabéns, você venceu!');
// } else {
//     alert('Tente novamente para ganhar.');
// }

// let saldoConta = -1000;

// alert('O saldo da sua conta está em R$ ' + saldoConta + ',00.');

// let nomeUsuario = prompt('Qual o seu nome?');

// alert(nomeUsuario + ', seja bem-vinde!');

//--------------------------------------
//Exercícios 03:

// let contadorA = 1;

// while (contadorA <= 10) {
//     alert('Contador A com valor ' + contadorA + '/10.');
//     contadorA++;
// }

// let contadorB = 10;

// while (contadorB >= 0) {
//     alert('Contador B com valor ' + contadorB + '/10.');
//     contadorB--;
// }

// let contadorC = prompt('Selecione um número inicial maior que 0:');
// let maxContadorC = contadorC;

// while (contadorC >= 0) {
//     alert('Contador C com valor ' + contadorC + '/' + maxContadorC + '.');
//     contadorC--;
// }

// let maxContadorD = prompt('Selecione um número final maior que 0:');
// let contadorD = 0;

// while (contadorD <= maxContadorD) {
//     alert('Contador D com valor ' + contadorD + '/' + maxContadorD + '.');
//     contadorD++;
// }

//--------------------------------------
//Exercícios 04:

// console.log('Boas vindas, usuário!');

// let nome = 'Gabriel'
// console.log(`Olá, ${nome}!`);

// alert(`Olá, ${nome}!`);

// let linguagemFav = prompt('Qual a linguagem de programação que você mais gosta?');
// console.log(`Linguagem favorita: ${linguagemFav}.`);

// let valor1 = 4;
// let valor2 = 5;
// let resultado = valor1 + valor2;
// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// valor1 = 4;
// valor2 = 5;
// resultado = valor1 - valor2;
// console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultado}.`);

// let idadeUsuario = prompt('Quantos anos você tem?');

// let nomeIdade = idadeUsuario >= 18 ? 'maior' : 'menor';
// alert(`Usuário ${nomeIdade} de idade.`);

// let valorUsuario = prompt('Digite um número.');

// if (valorUsuario == 0) {
//     alert('Número nulo.');
// } else {
//     if (valorUsuario > 0) {
//         alert('Número positivo.');
//     } else {
//         alert('Número negativo.');
//     }
// }

// let contadorConsole = 1;

// while (contadorConsole <= 10) {
//     console.log(`Contador ${contadorConsole}/10`);
//     contadorConsole++;
// }

// let nota = 10;

// if (nota >= 7) {
//     console.log('Aprovado.');
// } else {
//     console.log('Reprovado.');
// }

// numeroAleatorio = Math.random();
// console.log(numeroAleatorio);
// console.log(parseInt(numeroAleatorio * 10 + 1));
// console.log(parseInt(numeroAleatorio * 1000 + 1));