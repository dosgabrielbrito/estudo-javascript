//Exercício 1:

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do Desafio';

// function consoleClick() {
//     console.log('O botão foi clicado');
// }

// function alertaClick() {
//     alert('Eu amo JS');
// }

// function promptClick() {
//     let cidade = prompt('Digite o nome de uma cidade do Brasil:');
//     alert(`Estive em ${cidade} e lembrei de você.`);
// }

// function somaClick() {
//     let numero1 = parseInt(prompt('Digite um número:'));
//     let numero2 = parseInt(prompt('Digite outro número:'));
//     alert(`A soma de ${numero1} e ${numero2} é ${numero1 + numero2}.`);
// }

//Exercício 2:

function olaMundoConsole() {
    console.log('Olá, mundo!');
}

olaMundoConsole();

function olaPessoaConsole(nome) {
    console.log(`Olá, ${nome}!`);
}

olaPessoaConsole('Gabriel');

function dobroNumero(numero) {
    return 2 * numero;
}

console.log(dobroNumero(2));

function media3Numeros(n1, n2, n3) {
    return ((n1 + n2 + n3) / 3);
}

console.log(media3Numeros(6, 9, 12));

function maiorNumero(n1, n2) {
    if (n1 > n2) {
        maior = n1;
    } else {
        maior = n2;
    }
    return maior;
}

console.log(maiorNumero(9, 100));

function quadradoNumero(numero) {
    return numero * numero;
}

console.log(quadradoNumero(12));

function massaCorporal(peso, altura) {
    return peso / (altura * altura);
}

console.log(massaCorporal(90, 1.82));

function fatorialNumero(numero) {
    contNum = numero;
    fatNum = numero;
    while (contNum > 1) {
        fatNum = fatNum * (contNum - 1);
        contNum--;
    }
    return fatNum;
}

console.log(fatorialNumero(5));

function realParaDolar(real) {
    return real * 4.80;
}

console.log(realParaDolar(100));

function areaPerimetroRet(altura, largura) {
    return altura * largura;
}

console.log(areaPerimetroRet(2, 3));

function areaPerimetroCir(diametro) {
    return 3.14 * (diametro * diametro) / 4;
}

console.log(areaPerimetroCir(4));

function tabuadaNumero(numero) {
    contNum = 0;
    while (contNum <= 10) {
        console.log(contNum * numero);
        contNum++;
    }
}

tabuadaNumero(8);
