"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var vehiculo_1 = require("./vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(placa, marca, modelo, año, carga) {
        var _this = _super.call(this, placa, marca, modelo, año) || this;
        _this.carga = carga;
        return _this;
    }
    ;
    //metodos get que devuelve el atributo solicitado de camiones     
    Camion.prototype.getCamiones = function () {
        return this.getPlaca(), this.getModelo(), this.getMarca(), this.carga;
    };
    //metodo set 
    Camion.prototype.setCarga = function (carga) {
        this.carga = carga;
    };
    return Camion;
}(vehiculo_1.Vehiculo));
exports.Camion = Camion;
