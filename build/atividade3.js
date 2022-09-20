"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eletronico = void 0;
var eletronico = /** @class */ (function () {
    function eletronico(_a) {
        var energiaE = _a.energiaE, preco = _a.preco, tipo = _a.tipo;
        this.energiaE = energiaE;
        this.preco = preco;
        this.tipo = tipo;
    }
    Object.defineProperty(eletronico.prototype, "ligar", {
        get: function () {
            return this.liga;
        },
        enumerable: false,
        configurable: true
    });
    eletronico.prototype.public = function (liga) {
        this.liga = liga;
    };
    return eletronico;
}());
exports.eletronico = eletronico;
