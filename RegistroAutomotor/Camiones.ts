import { Vehiculo } from "./vehiculo";
export class Camion  extends Vehiculo {
    private carga:number;

    constructor(placa:string,marca: string, modelo: string,año:number,carga:number) {
        super(placa,marca,modelo,año)
        this.carga=carga;
    };
    //metodos get que devuelve el atributo solicitado de camiones     
    
    getCamiones(){
        return this.getPlaca(),this.getModelo(),this.getMarca(),this.carga;
    }
    //metodo set 
    setCarga(carga:number) {
        this.carga=carga;
    }
}    