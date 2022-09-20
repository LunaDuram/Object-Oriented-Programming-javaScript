import PromptSync = require('prompt-sync');
import {aviao} from './atividade2';

const prompt = PromptSync();

const tamanhoA = Number (prompt('Digite o tamanho do avião:'));
const tamanhoJanela = Number(prompt('Digite o tamanho da janela:'));
const tipoDeMotor = prompt('Digite o tipo de motor:');
const velocidaVoo = Number(prompt('Digite a velocidade:'));
const Aviao = new aviao({
    tamanhoA,
    tamanhoJanela,
    tipoDeMotor,
});
console.log(`O tamanho do avião é de: ${tamanhoA}, tamanho da janela é de: ${tamanhoJanela}, tipo de motor é: ${tipoDeMotor},o avião voa na velocidade: ${velocidaVoo} `)