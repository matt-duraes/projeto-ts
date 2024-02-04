export class Negociacao {

    constructor(
        private data: Date,
        private quantidade: number,
        private valor: number
    ) {}

    get BuscarData(): Date {
        const data = new Date(this.data.getTime());
        return data;
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