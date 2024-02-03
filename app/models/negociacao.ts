export class Negociacao {
    private data: Date;
    private quantidade: number;
    private valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    get BuscarData(): Date {
        return this.data;
    }

    get BuscarQuantidade(): number {
        return this.quantidade;
    }

    get BuscarValor(): number {
        return this.valor;
    }

    get BuscarVolume(): number {
        return this.quantidade*this.valor;
    }
}