import { ItemTerceiros } from "./ItemTerceiros";
import { Produto } from "./Produto";
import { RelatorioLog } from "./RelatorioLog";
import { isAplicavelDesconto, isPrecificavel, Precificavel } from "./Precificavel";
import { InspectorUtils } from "./InspectorUtils";
import { DynamicUtils } from "./DynamicUtils";

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
export const inspectorUtils = new InspectorUtils();
export const dynamicUtils = new DynamicUtils();


