import { Imprimivel } from "../utils/imprimivel.js";
export class Negociacao extends Imprimivel {
    constructor(_data, quantidade, valor) {
        super();
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
        console.log(`
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
      `);
    }
}
