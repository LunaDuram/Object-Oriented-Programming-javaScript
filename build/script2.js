"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var atividade2_1 = require("./atividade2");
var prompt = PromptSync();
var tamanhoA = Number(prompt('Digite o tamanho do avião:'));
var tamanhoJanela = Number(prompt('Digite o tamanho da janela:'));
var tipoDeMotor = prompt('Digite o tipo de motor:');
var velocidaVoo = Number(prompt('Digite a velocidade:'));
var Aviao = new atividade2_1.aviao({
    tamanhoA: tamanhoA,
    tamanhoJanela: tamanhoJanela,
    tipoDeMotor: tipoDeMotor,
});
console.log("O tamanho do avi\u00E3o \u00E9 de: ".concat(tamanhoA, ", tamanho da janela \u00E9 de: ").concat(tamanhoJanela, ", tipo de motor \u00E9: ").concat(tipoDeMotor, ",o avi\u00E3o voa na velocidade: ").concat(velocidaVoo, " "));
