export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get BuscarData() {
        const data = new Date(this.data.getTime());
        return data;
    }
    get BuscarQuantidade() {
        return this.quantidade;
    }
    get BuscarValor() {
        return this.valor;
    }
    get BuscarVolume() {
        return this.quantidade * this.valor;
    }
}
