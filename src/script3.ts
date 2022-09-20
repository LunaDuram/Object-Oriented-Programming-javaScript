import PromptSync = require('prompt-sync');
import { eletronico } from './atividade3';

const prompt = PromptSync();

const energiaE = Boolean(prompt('O eletrônico utiliza energia ?'));
const preco = Number (prompt('Digite o preço do eletrônico:'));
const tipo = prompt('Qual tipo de eletrônico ?');
const liga = Boolean(prompt('Seu aparelho está ligando ?'));

const Eletronico = new eletronico({
    energiaE,
    preco,
    tipo,

})
console.log(`O aparelho eletrônico usa energia? ${energiaE},o preço do eletrônico é:${preco}, o tipo de eletrônico é?${tipo}`);