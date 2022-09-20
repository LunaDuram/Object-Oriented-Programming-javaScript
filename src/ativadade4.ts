interface newFuncionario{
    nome: string;
    identificacao: number;
    horaDeEntrada: number;
    horaDeSaida: Number;
}
  class Funcionario{
   private nome: string;
   private identificacao: number;
   private horaDeEntrada: number;
   private horaDeSaida: Number;
   private horasTrabalhadas: number = 0;

   public get expediente(){
    return this.horasTrabalhadas;
   }
   constructor ({nome, identificacao, horaDeEntrada, horaDeSaida}: newFuncionario){
     this.nome = nome;
     this.identificacao = identificacao;
     this.horaDeEntrada = horaDeEntrada;
     this.horaDeSaida = horaDeSaida;
     this.horasTrabalhadas = this.horasTrabalhadas;
   }
   fatiar (horasTrabalhadas:number){
    this.horasTrabalhadas = horasTrabalhadas;
   }
  }
    export{Funcionario};
