export class Negociacao {

    constructor(
        private data: Date,
        private quantidade: number,
        private valor: number
    ) {}

    public get BuscarData(): Date {
        const data = new Date(this.data.getTime());
        return data;
    }

    public get BuscarQuantidade(): number {
        return this.quantidade;
    }

    public get BuscarValor(): number {
        return this.valor;
    }

    public get BuscarVolume(): number {
        return this.quantidade*this.valor;
    }
}