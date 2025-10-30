// 🧩 Desafio 1
alert('Bem-vindo ao nosso site!');

let nome = "Lua";

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

let nome = prompt('Digite o seu nome');

let idade = prompt('Digite a sua idade');

let idade = prompt('Digite a sua idade');
if (idade >= 18) {
    alert('Pode tirar a habilitação!'); 
}

// 🧩 Desafio 2 
let diaDaSemana = prompt("Qual é o dia da semana?");
if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

let numero = Number(prompt("Digite um número:"));
if (numero > 0) {
  alert("O número é positivo!");
} else if (numero < 0) {
  alert("O número é negativo!");
} else {
  alert("O número é zero!");
}

let pontuacao = Number(prompt("Digite sua pontuação:"));
if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

let saldo = 750.50;
alert(`Seu saldo atual é de R$ ${saldo}.`);

let nome = prompt("Digite seu nome:");
alert(`Olá, ${nome}! Seja bem-vindo!`);
