import { ItemSistema } from "./ItemSistema";

export class Produto extends ItemSistema {
    public categoria:string;
    
    constructor(titulo:string, preco:number, categoria:string){
        super(titulo, preco)
        this.categoria = categoria;
    }

    public aplicarDesconto(porcentagem:number): void {
        this.preco = this.preco-(this.preco*(porcentagem/100));
    }


}