"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
var Registro = /** @class */ (function () {
    function Registro(nombre, listamotos, listaautos, listacamiones) {
        this.nombre = nombre;
        if (listamotos != undefined) {
            this.motos = listamotos;
        }
        else {
            this.motos = [];
        }
        if (listaautos != undefined) {
            this.autos = listaautos;
        }
        else {
            this.autos = [];
        }
        if (listacamiones != undefined) {
            this.camiones = listacamiones;
        }
        else {
            this.camiones = [];
        }
    }
    Registro.prototype.getNombre = function () {
        return this.nombre;
    };
    Registro.prototype.getMotos = function () {
        return this.motos;
    };
    Registro.prototype.getCamiones = function () {
        return this.camiones;
    };
    Registro.prototype.getAutos = function () {
        return this.autos;
    };
    // Agrego una nueva moto al registro Automotoral  atributo motos
    Registro.prototype.agregarMoto = function (motito) {
        this.motos.push(motito);
    };
    // Agrego un nuevo camion al registro Automotor atributo camiones
    Registro.prototype.agregarCamion = function (camio) {
        this.camiones.push(camio);
    };
    // Agrego un nuevo auto al registro Automotor al atributo autos
    Registro.prototype.agregarAuto = function (autito) {
        this.autos.push(autito);
    };
    Registro.prototype.obtenerMotos = function () {
        return this.motos;
    };
    Registro.prototype.obtenerCamiones = function () {
        return this.camiones;
    };
    Registro.prototype.obtenerAutos = function () {
        return this.autos;
    };
    // Eliminar una moto, camión o auto del registro
    Registro.prototype.eliminarMoto = function (patente) {
        for (var i = 0; i < (this.motos).length; i++) {
            if (this.motos[i].getPlaca() == patente) {
                this.motos.splice(i, 1);
                break;
            }
        }
    };
    Registro.prototype.eliminarCamion = function (patente) {
        for (var i = 0; i < (this.camiones).length; i++) {
            if (this.camiones[i].getPlaca() == patente) {
                this.camiones.splice(i, 1);
                break;
            }
        }
    };
    Registro.prototype.eliminarAuto = function (patente) {
        for (var i = 0; i < (this.autos).length; i++) {
            if (this.autos[i].getPlaca() == patente) {
                this.autos.splice(i, 1);
                break;
            }
        }
    };
    // contabilizando la cantidad de autos modelo anteriores al año 2000 para  luego sacar el porcentaje
    Registro.prototype.calcularPorcentaje = function () {
        var cant2000 = 0;
        for (var i = 0; i < (this.autos).length; i++) {
            if (this.autos[i].getAño() < 2000) {
                cant2000++;
            }
        }
        return cant2000 * 100 / (this.autos).length;
    };
    return Registro;
}());
exports.Registro = Registro;
