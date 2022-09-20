"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var atividade3_1 = require("./atividade3");
var prompt = PromptSync();
var energiaE = Boolean(prompt('O eletrônico utiliza energia ?'));
var preco = Number(prompt('Digite o preço do eletrônico:'));
var tipo = prompt('Qual tipo de eletrônico ?');
var liga = Boolean(prompt('Seu aparelho está ligando ?'));
var Eletronico = new atividade3_1.eletronico({
    energiaE: energiaE,
    preco: preco,
    tipo: tipo,
});
console.log("O aparelho eletr\u00F4nico usa energia?".concat(energiaE, ",o pre\u00E7o do eletr\u00F4nico \u00E9:").concat(preco, ", o tipo de eletr\u00F4nico \u00E9?").concat(tipo));
