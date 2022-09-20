"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aviao = void 0;
var aviao = /** @class */ (function () {
    function aviao(_a) {
        var tamanhoA = _a.tamanhoA, tamanhoJanela = _a.tamanhoJanela, tipoDeMotor = _a.tipoDeMotor;
        this.tamanhoA = tamanhoA;
        this.tamanhoJanela = tamanhoJanela;
        this.tipoDeMotor = tipoDeMotor;
    }
    Object.defineProperty(aviao.prototype, "velVoo", {
        get: function () {
            return this.velocidaVoo;
        },
        enumerable: false,
        configurable: true
    });
    aviao.prototype.voar = function (velocidaVoo) {
        this.velocidaVoo = velocidaVoo;
    };
    return aviao;
}());
exports.aviao = aviao;
