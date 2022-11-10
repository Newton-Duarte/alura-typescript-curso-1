export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    paraTexto() {
        return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
      `;
    }
    ehIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate() &&
            this.quantidade === negociacao.quantidade &&
            this.valor === negociacao.valor;
    }
}
