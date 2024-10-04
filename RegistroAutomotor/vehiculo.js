"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(placa, marca, modelo, año) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    //metodos get que devuelve el atributo solicitado de motos
    Vehiculo.prototype.getPlaca = function () {
        return this.placa;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAño = function () {
        return this.año;
    };
    //metodo set 
    Vehiculo.prototype.setPlaca = function (nombre) {
        this.placa = nombre;
    };
    Vehiculo.prototype.setMarca = function (nombre) {
        this.placa = nombre;
    };
    Vehiculo.prototype.setModelo = function (nombre) {
        this.placa = nombre;
    };
    Vehiculo.prototype.setAño = function (año) {
        this.año = año;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
