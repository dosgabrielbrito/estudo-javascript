//Setar variáveis:
let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Iniciar jogo:
console.log(numeroSecreto);
mensagemInicial();

//Função para exibir texto:
function exibirTexto(tag, texto) {
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

//Função mensagem inicial:
function mensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10:');
}

//Função para gerar número aleatório:
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumeros = listaNumerosSorteados.length;

    if (quantidadeNumeros == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

//Função de limpar o campo:
function limparCampo() {
    document.querySelector('input').value = '';
}

//Função de reiniciar jogo:
function reiniciarJogo() {
    mensagemInicial();
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//Função para validar chute:
function verificarChute() {
    let numeroUsuario = document.querySelector('input').value;

    if (numeroUsuario == numeroSecreto) {
        //Acerto:
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroUsuario < numeroSecreto) {
        //Erro para menos:
        exibirTexto('p', `O número secreto é maior que ${numeroUsuario}`);
    } else {
        //Erro para mais:
        exibirTexto('p', `O número secreto é menor que ${numeroUsuario}`);
    }
    //Atualizações:
    tentativas++;
    limparCampo();
}