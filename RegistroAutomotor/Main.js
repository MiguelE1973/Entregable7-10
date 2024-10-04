"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Motos_1 = require("./Motos");
var Autos_1 = require("./Autos");
var Camiones_1 = require("./Camiones");
var Registros_1 = require("./Registros");
// Crear motos
var moto1 = new Motos_1.Moto("VBG 111", "Yamaha", "Mediana", 2008, 250);
var moto2 = new Motos_1.Moto("HHG 222", "Honda", "Grande", 2011, 125);
var moto3 = new Motos_1.Moto("MNV 333", "Harley Davinson", "Grande", 2009, 1350);
// Crear camiones
var camion1 = new Camiones_1.Camion("SDR 121", "Mercedes Benz", "Grande", 2008, 12000);
var camion2 = new Camiones_1.Camion("NNN 675", "Volvo", "Mediano", 2014, 8500);
var camion3 = new Camiones_1.Camion("DSA 345", "Iveco", "Grande", 2016, 9000);
// Crear autos
var auto1 = new Autos_1.Auto("MVS 808", "Renault", "Clio", 2013, 5);
var auto2 = new Autos_1.Auto("BSA 232", "Ford ", "Fiesta", 2008, 5);
var auto3 = new Autos_1.Auto("UHG 666", "Fiat ", "Spazio", 1998, 3);
// Crear registro
var registro1 = new Registros_1.Registro("Registro N1");
// Agregar los vehículos al registro 
registro1.agregarMoto(moto1);
registro1.agregarAuto(auto1);
registro1.agregarCamion(camion1);
registro1.agregarMoto(moto2);
registro1.agregarAuto(auto2);
registro1.agregarCamion(camion2);
registro1.agregarMoto(moto3);
registro1.agregarAuto(auto3);
registro1.agregarCamion(camion3);
//Ver lista de Vehículos del registro del Automotor
console.log("Motos:");
console.log(registro1.obtenerMotos());
console.log("Camiones");
console.log(registro1.obtenerCamiones());
console.log("Autos: ");
console.log(registro1.obtenerAutos());
// Modificar datos de los distintos vehiculos: uno heredado de Vehículo y otro propio de la clase hija
moto1.setPlaca("GFD 222");
moto1.setCilindrada(500);
// -------------------------------------------------------------------- 
camion1.setPlaca("GFD 555");
camion1.setCarga(25000);
// -------------------------------------------------------------------
auto1.setPlaca("GFD 888");
auto1.setPuertas(4);
// Eliminar una moto del registro buscandolo por patente
registro1.eliminarMoto("MNV 333");
// Eliminar un camion del registro buscandolo por patente
registro1.eliminarCamion("SDR 121");
// Eliminar un auto del registro buscandolo por patente
registro1.eliminarAuto("BSA 232");
console.log("------------------------------------------------------------------");
// Comprobar si se eliminó la moto
console.log("Motos:");
console.log(registro1.obtenerMotos());
// Comrobar si se eliminó un camión
console.log("Camiones");
console.log(registro1.obtenerCamiones());
// Comrobar si se eliminó el auto
console.log("Autos: ");
console.log(registro1.obtenerAutos());
// Calcula el porcentaje de autos que son anteriores al año 2000 segun año del vehículo
var Porcentaje;
Porcentaje = registro1.calcularPorcentaje();
console.log("Porcentaje de Autos anteriores al año 2000", Porcentaje, " %");
