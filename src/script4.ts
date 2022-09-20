import PromptSync = require('prompt-sync');
import { Funcionario } from './ativadade4';

const prompt = PromptSync();

 const nome= prompt ('Digite seu nome:');
 const identificacao= Number(prompt('Digite sua identificação:'));
 const horaDeEntrada= Number(prompt('Digite sua hora de entrada:'));
 const horaDeSaida= Number(prompt('Digite sua hora de saída:'));
 const horasTrabalhadas = Number;

 const funcionario = new Funcionario({
    nome,
    identificacao,
    horaDeEntrada,
    horaDeSaida,
 })
 console.log(`O nome do funcionário é ${nome}, O número de identificacao é ${identificacao}, O horario de entrada é ${horaDeEntrada},O horario de saída é ${horaDeSaida}`);