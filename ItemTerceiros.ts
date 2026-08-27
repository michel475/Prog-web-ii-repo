export class ItemTerceiros {
    public preco:number;
    public fornecedor:string;

    constructor(preco:number, fornecedor:string){
        this.preco=preco;
        this.fornecedor=fornecedor;
    }


    public aplicarDesconto(porcentagem:number): void {
        this.preco = this.preco-(this.preco*(porcentagem/100));
    }
}