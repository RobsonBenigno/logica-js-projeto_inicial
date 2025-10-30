// 🧩 Desafios 1

// Exibe um alerta na tela do navegador com a mensagem de boas-vindas
alert('Bem-vindo ao nosso site!');

// Cria uma variável chamada "nome" e atribui o valor "Lua"
let nome = "Lua";

// Cria uma variável chamada "idade" e atribui o valor 25
let idade = 25;

// Cria uma variável chamada "numeroDeVendas" e atribui o valor 50
let numeroDeVendas = 50;

// Cria uma variável chamada "saldoDisponivel" e atribui o valor 1000
let saldoDisponivel = 1000;

// Exibe um alerta informando que ocorreu um erro
alert('Erro! Preencha todos os campos');

// Cria uma variável "mensagemDeErro" e atribui o texto do erro
let mensagemDeErro = 'Erro! Preencha todos os campos';
// Exibe o conteúdo da variável "mensagemDeErro" em um alerta
alert(mensagemDeErro);

// Solicita que o usuário digite o nome e armazena na variável "nome"
let nomePrompt = prompt('Digite o seu nome');

// Solicita que o usuário digite a idade e armazena na variável "idade"
let idadePrompt = prompt('Digite a sua idade');

// Verifica se a idade digitada é maior ou igual a 18
if (idadePrompt >= 18) {
    // Se for maior ou igual a 18, exibe alerta informando que pode tirar a habilitação
    alert('Pode tirar a habilitação!'); 
}


// 🧩 Desafios 2

// Pergunta ao usuário qual é o dia da semana e armazena em "diaDaSemana"
let diaDaSemana = prompt("Qual é o dia da semana?");
// Verifica se o dia é sábado ou domingo
if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
  alert("Bom fim de semana!"); // Se for, exibe mensagem de fim de semana
} else {
  alert("Boa semana!"); // Caso contrário, exibe mensagem de boa semana
}

// Solicita que o usuário digite um número e converte para Number
let numero = Number(prompt("Digite um número:"));
// Verifica se o número é positivo, negativo ou zero
if (numero > 0) {
  alert("O número é positivo!");
} else if (numero < 0) {
  alert("O número é negativo!");
} else {
  alert("O número é zero!");
}

// Solicita a pontuação do usuário e converte para Number
let pontuacao = Number(prompt("Digite sua pontuação:"));
// Verifica se a pontuação é suficiente para vencer
if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

// Cria uma variável com saldo e exibe no alerta usando template string
let saldo = 750.50;
alert(`Seu saldo atual é de R$ ${saldo}.`);

// Solicita o nome do usuário e exibe mensagem de boas-vindas usando template string
let nomeUsuario = prompt("Digite seu nome:");
alert(`Olá, ${nomeUsuario}! Seja bem-vindo!`);


// 🧩 Desafios 3

// Cria um contador que vai de 1 até 10 usando while
let contador = 1;
while (contador <= 10) {
  console.log(contador); // Mostra o número no console
  contador++; // Incrementa o contador
}

// Cria um contador que vai de 10 até 0 usando while
let contador2 = 10;
while (contador2 >= 0) {
  console.log(contador2);
  contador2--; // Decrementa o contador
}

// Solicita um número para contagem regressiva
let numeroRegressivo = Number(prompt("Digite um número para contagem regressiva:"));
while (numeroRegressivo >= 0) {
  console.log(numeroRegressivo);
  numeroRegressivo--;
}

// Solicita um número para contagem progressiva
let limite = Number(prompt("Digite um número para contagem progressiva:"));
let i = 0;
while (i <= limite) {
  console.log(i);
  i++;
}


// 🧩 Desafios finais

// Exibe mensagem de boas-vindas no console
console.log("Boas-vindas ao nosso programa!");

// Cria variável nome e mostra mensagem de saudação no console
let nomeFinal = "Robson";
console.log("Olá, " + nomeFinal + "!");

// Cria variável nome2 e mostra mensagem de saudação com alert
let nome2 = "Robson";
alert("Olá, " + nome2 + "!");

// Pergunta ao usuário qual a linguagem favorita e exibe no console
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("Você gosta de " + linguagem + "!");

// Soma de dois valores
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// Subtração de dois valores
let valor3 = 50;
let valor4 = 30;
let resultado2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`);

// Verificação de maioridade
let idadeFinal = Number(prompt("Qual é a sua idade?"));
if (idadeFinal >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Verificação se número é positivo, negativo ou zero
let numeroFinal = Number(prompt("Digite um número:"));
if (numeroFinal > 0) {
  console.log("O número é positivo.");
} else if (numeroFinal < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

// Loop de 1 a 10
let contadorFinal = 1;
while (contadorFinal <= 10) {
  console.log(contadorFinal);
  contadorFinal++;
}

// Verificação de nota
let nota = 8;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Número aleatório entre 0 e 1
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Número aleatório inteiro entre 1 e 10
let numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio2);

// Número aleatório inteiro entre 1 e 1000
let numeroAleatorio3 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio3);
