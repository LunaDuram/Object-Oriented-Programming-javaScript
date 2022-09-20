"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(_a) {
        var nome = _a.nome, identificacao = _a.identificacao, horaDeEntrada = _a.horaDeEntrada, horaDeSaida = _a.horaDeSaida;
        this.horasTrabalhadas = 0;
        this.nome = nome;
        this.identificacao = identificacao;
        this.horaDeEntrada = horaDeEntrada;
        this.horaDeSaida = horaDeSaida;
        this.horasTrabalhadas = this.horasTrabalhadas;
    }
    Object.defineProperty(Funcionario.prototype, "expediente", {
        get: function () {
            return this.horasTrabalhadas;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.fatiar = function (horasTrabalhadas) {
        this.horasTrabalhadas = horasTrabalhadas;
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
