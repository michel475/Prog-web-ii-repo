import { ItemTerceiros } from "./ItemTerceiros";
import { Produto } from "./Produto";
import { RelatorioLog } from "./RelatorioLog";
import { isAplicavelDesconto, isPrecificavel, Precificavel } from "./Precificavel";

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
    if(metodo.length !== 0) {
        (obj as any)[nomeMetodo](args);
        console.log(obj.preco)
    }
    else {
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

export function processarReajusteUniversal(obj: any, porcentagem: number): void {
    if(isPrecificavel(obj)) {
        if(isAplicavelDesconto(obj)){
            obj.aplicarDesconto(porcentagem);
        } else{
            obj.preco = obj.preco - (obj.preco*(porcentagem/100));
        }
    } else{
        console.log("Objeto não é precificável");
    }
}


const prod = new Produto("Notebook", 5000, "Eletrônicos");
const itemT = new ItemTerceiros(400, "Distribuidora XYZ");
const relatorioLog = new RelatorioLog("2026-08-25", "Sistema iniciado");

inspecionarObjeto(prod);
invocarMetodo(prod, "aplicarDesconto", [5])
console.log(isPrecificavel(prod));
processarReajusteUniversal(prod, 5);

