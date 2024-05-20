alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let numeroUsuario = prompt('Escolha um número entre 1 e 30');

//Se o chute for igual ao núemro screto:
if (numeroUsuario == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto: ${numeroSecreto}`);
} else {
    alert('Você errou :(');
};

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
// };

//Exercícios 02:

// let diaDaSemana = prompt('Que dia da semana é hoje?');

// if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// };

// let numeroUsuario = prompt('Digite um número.');

// if (numeroUsuario < 0) {
//     alert('O número ' + numeroUsuario + ' é negativo.');
// } else {
//     alert('O número ' + numeroUsuario + ' é positivo ou nulo.');
// };

// let scoreUsuario = prompt('Qual a sua pontuação?');

// if (scoreUsuario >= 100) {
//     alert('Parabéns, você venceu!');
// } else {
//     alert('Tente novamente para ganhar.');
// };

// let saldoConta = -1000;

// alert('O saldo da sua conta está em R$ ' + saldoConta + ',00.');

// let nomeUsuario = prompt('Qual o seu nome?');

// alert(nomeUsuario + ', seja bem-vinde!');