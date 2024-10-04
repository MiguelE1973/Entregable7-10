import { Vehiculo } from "./vehiculo";
export class Moto extends Vehiculo{
    
    cilindrada:number;

    constructor(placa:string,marca: string, modelo: string,año:number,cilindrada:number) {
        super(placa,marca,modelo,año);
        this.cilindrada=cilindrada;
    }
    //metodos get 
    getMotoss(){
        return this.getPlaca(),this.getModelo(),this.getMarca(),this.cilindrada;
    }
    
    //metodo set para modificar patente de una moto
    setCilindrada(cilindrada:number) {
        this.cilindrada=cilindrada;
    }
}  




 