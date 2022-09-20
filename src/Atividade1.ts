interface newClient {
    nome: string;
    idade: number;
    cpf: number;
}
class client {
    private nome: string;
    private idade: number;
    private cpf: number;

    constructor ({nome, idade, cpf}: newClient){

        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}

export {client};