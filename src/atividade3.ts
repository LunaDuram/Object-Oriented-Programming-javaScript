interface newEletronico{
    energiaE: Boolean;
    preco: number;
    tipo: string;
}
class eletronico{
    private energiaE: Boolean;
    private preco: number;
    private tipo: string;
    private liga: Boolean;

    public get ligar(){
        return this.liga;
    }
    constructor ({energiaE, preco, tipo}: newEletronico){
        this.energiaE = energiaE;
        this.preco = preco;
        this.tipo = tipo;
    }
    public(liga: Boolean){
        this.liga = liga
    }
}
export {eletronico};