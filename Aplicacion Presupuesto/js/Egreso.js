class Egreso extends Dato{
    static contadorEgresos = 0;

    constructor(descripción, valor){
        super(descripción, valor);
        this._id = ++Egreso.ContadorEgresos;
    }
    get id(){
        return this._id;
    }
}