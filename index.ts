import { ItemTerceiros } from "./ItemTerceiros";
import { Produto } from "./Produto";
import { RelatorioLog } from "./RelatorioLog";

export function alterarAtributo(obj: any, nomeAtributo:string, novoValor:any):boolean {
    if(nomeAtributo in obj) {
        obj[nomeAtributo] = novoValor
        console.log(`Valor na propriedade ${nomeAtributo} alterado com sucesso`);
        return true;
    }
    else{
        console.log(`Não foi encontrada uma propriedade com o nome ${nomeAtributo}`);
        return false;
    }
}

export function invocarMetodo(obj: any, nomeMetodo: string, args: any[]) {
    const prototype = Object.getPrototypeOf(obj);
    const metodos = Object.getOwnPropertyNames(prototype)
    const metodo = metodos.filter(met => met === nomeMetodo)
    console.log(metodo)
    if(metodo) {
        (obj as any)[nomeMetodo](args);
        console.log(obj.preco)
    }
    if(!metodos) {
        console.log("Método não encontrado no objeto");
        return undefined;
    }
}

export function inspecionarObjeto(obj: any): void {
    const atributos = Object.keys(obj);
    const prototipoObj = Object.getPrototypeOf(obj);
    const metodos = Object.getOwnPropertyNames(prototipoObj).filter(prop => typeof prototipoObj[prop] === 'function' && prop !== 'constructor');
    const className = obj.constructor.name;
    console.log("=== Introspecção do Objeto ===")
    console.log("Classe: ", className);
    console.log("Atributos: ",atributos)
    console.log("Métodos: ", metodos);
}


const prod = new Produto("Notebook", 5000, "Eletrônicos");
const itemT = new ItemTerceiros(400, "Distribuidora XYZ");
const relatorioLog = new RelatorioLog("2026-08-25", "Sistema iniciado");

inspecionarObjeto(prod);
invocarMetodo(itemT, "aplicarDesconto", [5])
