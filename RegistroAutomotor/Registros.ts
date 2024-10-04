import { Vehiculo } from "./vehiculo";
import { Moto } from "./Motos";
import { Auto } from "./Autos";
import { Camion} from "./Camiones";

export class Registro{
    private nombre:string;
    private motos:Moto[];
    private autos:Auto[];
    private camiones:Camion[];
    constructor(nombre:string,listamotos?:Moto[],listaautos?:Auto[],listacamiones?:Camion[]) {
        this.nombre = nombre;
        if (listamotos!= undefined) {
            this.motos = listamotos;
        } else {
            this.motos = [];
        }
        if (listaautos!= undefined) {
            this.autos = listaautos;
        } else {
            this.autos = [];
        }
        if (listacamiones!= undefined) {
            this.camiones = listacamiones;
        } else {
            this.camiones = [];
        }
    }

getNombre() : string {
    return this.nombre;
}

getMotos(): Moto[] {
    return this.motos;
}
getCamiones(): Camion[] {
    return this.camiones;
}
getAutos(): Auto[] {
    return this.autos;
}
// Agrego una nueva moto al registro Automotoral  atributo motos
agregarMoto(motito: Moto): void {
    this.motos.push(motito);
}
// Agrego un nuevo camion al registro Automotor atributo camiones
agregarCamion(camio: Camion): void {
    this.camiones.push(camio);
}
// Agrego un nuevo auto al registro Automotor al atributo autos
agregarAuto(autito: Auto): void {
    this.autos.push(autito);
}

obtenerMotos(): Moto[] {
    return this.motos;
}
obtenerCamiones(): Camion[] {
    return this.camiones;
}

obtenerAutos(): Auto[] {
    return this.autos;
}

// Eliminar una moto, camión o auto del registro
eliminarMoto(patente: string): void {
    for (let i=0;i<(this.motos).length;i++) {
        if (this.motos[i].getPlaca()==patente){
            this.motos.splice(i,1);
            break;
        }
    }
}

eliminarCamion(patente: string): void {
    for (let i=0;i<(this.camiones).length;i++) {
        if (this.camiones[i].getPlaca()==patente){
            this.camiones.splice(i,1);
            break;
        }
    }
}
    
eliminarAuto(patente: string): void {
    for (let i=0;i<(this.autos).length;i++) {
        if (this.autos[i].getPlaca()==patente){
            this.autos.splice(i,1);
            break;
        }
    }
}

// contabilizando la cantidad de autos modelo anteriores al año 2000 para  luego 
// sacar el porcentaje

calcularPorcentaje(): number {
    let cant2000:number=0;       
    for (let i=0;i<(this.autos).length;i++){
          if (this.autos[i].getAño()<2000) {
                 cant2000++;   } 
                
    }
    return cant2000*100/(this.autos).length
}
}

