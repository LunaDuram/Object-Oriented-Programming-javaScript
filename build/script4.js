"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var ativadade4_1 = require("./ativadade4");
var prompt = PromptSync();
var nome = prompt('Digite seu nome:');
var identificacao = Number(prompt('Digite sua identificação:'));
var horaDeEntrada = Number(prompt('Digite sua hora de entrada:'));
var horaDeSaida = Number(prompt('Digite sua hora de saída:'));
var horasTrabalhadas = Number;
var funcionario = new ativadade4_1.Funcionario({
    nome: nome,
    identificacao: identificacao,
    horaDeEntrada: horaDeEntrada,
    horaDeSaida: horaDeSaida,
});
console.log("O nome do funcion\u00E1rio \u00E9 ".concat(nome, ", O n\u00FAmero de identificacao \u00E9 ").concat(identificacao, ", O horario de entrada \u00E9 ").concat(horaDeEntrada, ",O horario de sa\u00EDda \u00E9 ").concat(horaDeSaida));
