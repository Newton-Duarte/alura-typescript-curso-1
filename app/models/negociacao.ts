import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel {
  constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ) {}

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const data = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(data, quantidade, valor);
  }

  public get data(): Date {
    return new Date(this._data.getTime());
  }

  public get volume(): number {
    return this.quantidade * this.valor;
  }

  public paraTexto(): string {
      return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
      `;
  }
}