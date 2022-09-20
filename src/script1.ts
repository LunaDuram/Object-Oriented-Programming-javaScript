import PromptSync = require ('prompt-sync');
import { client } from './Atividade1';

const prompt = PromptSync();
const nome = String(prompt('Digite seu nome:'));
const idade = Number(prompt('Digite sua idade:'));
const cpf = Number(prompt('Digite seu cpf:'));

const Client = new client ({
     nome,
     idade,
     cpf,
});
console.log(`O nome dp cliente é:${nome}, a idade é: ${idade}, e o cpf é: ${cpf}`);