export class InspectorUtils { 
    constructor() {}

    inspecionarObjeto(obj: any): void {
        const atributos = Object.keys(obj);
        const prototipoObj = Object.getPrototypeOf(obj);
        const metodos = Object.getOwnPropertyNames(prototipoObj).filter(prop => typeof prototipoObj[prop] === 'function' && prop !== 'constructor');
        const className = obj.constructor.name;
        console.log("=== Introspecção do Objeto ===")
        console.log("Classe: ", className);
        console.log("Atributos da Instância: ",atributos)
        console.log("Métodos: ", metodos);
    }
}