export class Negociacao {
    private data: string;
    private quantidade: number;
    private valor: number;

    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    get BuscarData() {
        return this.data;
    }

    get BuscarQuantidade() {
        return this.quantidade;
    }

    get BuscarValor() {
        return this.valor;
    }

    get BuscarVolume() {
        return this.quantidade*this.valor;
    }
}