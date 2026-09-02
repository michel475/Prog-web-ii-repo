export class InspectorUtils { 
    constructor() {}

    inspecionarObjeto(obj: any): { attr: string[], prototipoObj: any, metodos: string[], className: string }   {
        const attr = Object.keys(obj);
        const prototipoObj = Object.getPrototypeOf(obj);
        const metodos = Object.getOwnPropertyNames(prototipoObj).filter(prop => typeof prototipoObj[prop] === 'function' && prop !== 'constructor');
        const className = obj.constructor.name;
        return { attr, prototipoObj, metodos, className }
    }

    searchMetodos(obj: any): string[] {
        const { metodos } = this.inspecionarObjeto(obj);
        const methods = [...metodos];
        return methods;
    }

    searchAtributos(obj: any): string[] {
        const { attr } = this.inspecionarObjeto(obj);
        const atributos = [...attr];
        return atributos;
    }

    getClassNameOf(obj: any): string {
        const { className } = this.inspecionarObjeto(obj);
        return className;
    }

    imprimirItens(arrayItens: string[]): void {
        const joinedItens = arrayItens.join(", ");
        console.log(joinedItens);
    }

    getCaracteristicas(obj: any) {
        const atributos = this.searchAtributos(obj);
        atributos.forEach(atr => {
            console.log(atr, '-', obj[atr]);
        })
    }

    imprimirInspecao(itens: { attr: string[], metodos: string[], className: string }): void {
        console.log("=== Introspecção do Objeto ===")
        console.log("Classe:", itens.className);
        console.log("Atributos da Instância:", itens.attr.join(", "));
        console.log("Métodos:", itens.metodos.join(", "))
    }
}