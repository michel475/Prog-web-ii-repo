import { Pessoa } from "../modelo/Pessoa"
import { ReflexaoTabela } from "../utils/ReflexaoTabela";

const pessoa = new Pessoa("michel", 21, "98988787");
const stmt = `INSERT INTO ${pessoa.getTableName()} (${ReflexaoTabela.getCampos(pessoa).map((campo) => campo.colunaNome).join(", ")}) VALUES(${pessoa.getId()}, ${pessoa.getNome()}, ${pessoa.getIdade()})`
console.log(stmt)