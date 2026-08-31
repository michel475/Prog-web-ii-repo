export interface Precificavel {
    preco: number;
}

export interface AplicavelDesconto {
    aplicarDesconto:(porcentagem: number) => void;
}

export function isPrecificavel(obj:any): obj is Precificavel {
    return 'preco' in obj
}

export function isAplicavelDesconto(obj: any): obj is AplicavelDesconto {
    const prototype = Object.getPrototypeOf(obj);
    const metodos = Object.getOwnPropertyNames(prototype).filter(prop => typeof prototype[prop] === 'function' && prop !== 'constructor');
    const aplicarDesconto = metodos.find(metodo => metodo === 'aplicarDesconto');
    if(aplicarDesconto) {
        return true;
    } else{
        return false;
    }
}