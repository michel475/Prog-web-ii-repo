import { dynamicUtils, inspectorUtils, processarReajusteUniversal } from "./index";
import { ItemTerceiros } from "./ItemTerceiros";
import { Produto } from "./Produto";
import { RelatorioLog } from "./RelatorioLog";


const newProd = new Produto("Z Phone", 5000.00, "Eletrônicos");
const {attr, metodos, className} = inspectorUtils.inspecionarObjeto(newProd);
//Test Case 1
inspectorUtils.imprimirInspecao({attr, metodos, className});

const atr = "preco";
const metodo = "aplicarDesconto";

//Test Case 2
const args = [50]
dynamicUtils.alterarAtributo(newProd, atr, 500.00);
console.log(atr.toUpperCase(),"do Z Phone apos método alterarAtributo: ",newProd[atr]);
dynamicUtils.invocarMetodo(newProd, metodo, args);
console.log(atr.toUpperCase(),"do Z Phone apos método invocarMetodo: ",newProd[atr]);


const produto = new Produto("Notebook", 5000, "Eletrônicos");
const itemTerceiros = new ItemTerceiros(400, "Distribuidora XYZ");
const relatorioLog = new RelatorioLog("2026-08-25", "Sistema iniciado");

const atributos = inspectorUtils.searchAtributos(produto);
const methods = inspectorUtils.searchMetodos(produto);
const nomeClasse = inspectorUtils.getClassNameOf(produto);
console.log("\nAtributos\n================");
inspectorUtils.imprimirItens(atributos)
console.log("\nMetodos\n==================");
inspectorUtils.imprimirItens(methods)
console.log("\nNome Classe\n==============");
inspectorUtils.imprimirItens([nomeClasse]);
console.log("\n\n")

//Test Case Reajuste universal
console.log("Aplicando Reajuste em ", inspectorUtils.getClassNameOf(relatorioLog));
processarReajusteUniversal(relatorioLog, 8);
console.log("\nAplicando o reajuste no ", inspectorUtils.getClassNameOf(itemTerceiros));
console.log("Valor anterior", itemTerceiros[atr]);
processarReajusteUniversal(itemTerceiros, 8);
console.log("Valor reajustado:",itemTerceiros[atr]);



// console.log("Antigo valor no atributo", atributoAlterar, ":", itemT.fornecedor)
// dynamicUtils.alterarAtributo(itemT, "fornecedor", "NVidia");
// console.log("Atributo", atributoAlterar, "alterado com sucesso para:", itemT.fornecedor);
// console.log("Antigo valor no atributo", metodoAInvocar, ":", prod[atributoAlterar])
// dynamicUtils.invocarMetodo(prod, "aplicarDesconto", [50])
// processarReajusteUniversal(itemT, 5);
// console.log("Atributo preco alterado com sucesso para:", prod[atributoAlterar]);
// // const metodos = inspectorUtils.searchMetodos(itemT);
// // const atr = inspectorUtils.searchAtributos(itemT);
// // const nome = inspectorUtils.getClassNameOf(itemT);
// const itens = { attr, metodos, className }
// inspectorUtils.imprimirInspecao(itens);
