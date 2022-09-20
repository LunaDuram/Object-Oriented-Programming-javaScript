"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Atividade1_1 = require("./Atividade1");
var prompt = PromptSync();
var nome = String(prompt('Digite seu nome:'));
var idade = Number(prompt('Digite sua idade:'));
var cpf = Number(prompt('Digite seu cpf:'));
var Client = new Atividade1_1.client({
    nome: nome,
    idade: idade,
    cpf: cpf,
});
console.log("O nome dp cliente \u00E9:".concat(nome, ", a idade \u00E9: ").concat(idade, ", e o cpf \u00E9: ").concat(cpf));
