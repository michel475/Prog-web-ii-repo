export class DynamicUtils {
    constructor() {}

    alterarAtributo(obj: any, nomeAtributo:string, novoValor:any):boolean {
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

    invocarMetodo(obj: any, nomeMetodo: string, args: any[]) {
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
}