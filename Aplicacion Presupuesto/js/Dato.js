class Dato{
    constructor(descripción, valor){
        this._descripción = descripción;
        this._valor = valor;
    }
    get descripción(){
        return this._descripción;
    }
    set descripción(descripción){
        this._descripción = descripción;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}