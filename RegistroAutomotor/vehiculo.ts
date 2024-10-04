export class Vehiculo {
    private placa:string;
    private marca: string;
    private modelo: string;
    private año:number;
    
    constructor(placa:string,marca: string, modelo: string,año:number) {
        this.placa=placa;
        this.marca = marca;
        this.modelo = modelo;
        this.año=año;    
    }
    //metodos get que devuelve el atributo solicitado de motos
    getPlaca():string{
        return this.placa;
    }
    getMarca(): string {
        return this.marca;
    }
    
    getModelo(): string {
        return this.modelo;
    }
    
    getAño(): number {
        return this.año;
    }
    
    //metodo set 
    setPlaca(nombre:string) {
        this.placa=nombre
    }
    setMarca(nombre:string) {
        this.placa=nombre
    }
    setModelo(nombre:string) {
        this.placa=nombre
    }
    setAño(año:number){
        this.año=año;
    }
}  
