import { dynamicUtils, inspectorUtils, processarReajusteUniversal } from "./index";
import { ItemTerceiros } from "./ItemTerceiros";
import { isAplicavelDesconto, isPrecificavel } from "./Precificavel";
import { Produto } from "./Produto";
import { RelatorioLog } from "./RelatorioLog";


const newProd = new Produto("Z Phone", 5000.00, "Eletrônicos");
const {attr, metodos, className} = inspectorUtils.inspecionarObjeto(newProd);
//Test Case 1
inspectorUtils.imprimirInspecao({attr, metodos, className});

const atr = "preco";
const metodo = "aplicarDesconto";
console.log("\n")
//Test Case 2
const args = [50]
dynamicUtils.alterarAtributo(newProd, atr, 500.00);
console.log(atr.toUpperCase(),"do Z Phone apos método alterarAtributo: ",newProd[atr]);
dynamicUtils.invocarMetodo(newProd, metodo, args);
console.log(atr.toUpperCase(),"do Z Phone apos método invocarMetodo: ",newProd[atr]);



//Testando métodos search e impressão individual
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


//Teste Case isPrecificavel e isAplicavelDesconto
//Caminho Infeliz
console.log("\nTestando em",inspectorUtils.getClassNameOf(relatorioLog))
console.log("isPrecificavel?",isPrecificavel(relatorioLog))
console.log("isAplicavelDesconto?",isAplicavelDesconto(relatorioLog));
console.log("\n");
//Caminho Feliz
console.log("Testando em",inspectorUtils.getClassNameOf(produto), "e",inspectorUtils.getClassNameOf(itemTerceiros));
console.log("isPrecificavel?",isPrecificavel(produto))
console.log("isAplicavelDesconto?",isAplicavelDesconto(itemTerceiros));

console.log("\n")
inspectorUtils.getCaracteristicas(produto)
console.log("\n")
inspectorUtils.getCaracteristicas(relatorioLog)
console.log("\n")
inspectorUtils.getCaracteristicas(itemTerceiros);
console.log("\n")

// console.log("Antigo valor no atributo", atributoAlterar, ":", itemT.fornecedor)
dynamicUtils.alterarAtributo(itemTerceiros, "fornecedor", "NVidia");
dynamicUtils.alterarAtributo(produto, "titulo", "Pista Hotwheels do Tubarão");

console.log("\n");
inspectorUtils.getCaracteristicas(itemTerceiros);
inspectorUtils.getCaracteristicas(produto)
