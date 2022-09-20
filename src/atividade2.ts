interface newAviao{
    tamanhoA: number;
    tamanhoJanela: number;
    tipoDeMotor: string;
}
class aviao {
    private tamanhoA: number;
    private tamanhoJanela: number;
    private tipoDeMotor: string;
    private velocidaVoo: number;

    public get velVoo(){
        return this.velocidaVoo;
    }

    constructor({tamanhoA, tamanhoJanela, tipoDeMotor}: newAviao){
        this.tamanhoA = tamanhoA;
        this.tamanhoJanela = tamanhoJanela;
        this.tipoDeMotor = tipoDeMotor;
    }
    public voar (velocidaVoo: number){
        this.velocidaVoo = velocidaVoo;
    }
}
export {aviao};