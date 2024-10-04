import { Vehiculo } from "./vehiculo";
export class Auto extends Vehiculo{
    private puertas:number;

    constructor(placa:string,marca: string, modelo: string,año:number,puertas:number) {
        super(placa,marca,modelo,año);
        this.puertas=puertas;
    }
    //metodos get que devuelve el atributo solicitado de autos
    
    getAutos(){
        return this.getPlaca(),this.getModelo(),this.getMarca(),this.puertas;
    } 
    //metodo set para modificar patente de un auto
    setPuertas(puerta:number) {
        this.puertas=puerta
    } 
}    