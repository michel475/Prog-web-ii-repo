export interface Precificavel {
    preco: number;
    aplicarDesconto?: (porcentagem: number) => void;
}

export function isPrecificavel(obj:any): obj is Precificavel {
    return typeof obj === 'object' && obj !== null && 'preco' in obj
}