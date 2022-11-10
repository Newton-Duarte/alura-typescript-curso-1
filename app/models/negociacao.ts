import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
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

  public ehIgual(negociacao: Negociacao): boolean {
    return this.data.getDate() === negociacao.data.getDate() && 
      this.quantidade === negociacao.quantidade && 
      this.valor === negociacao.valor;
  }
}