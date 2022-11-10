import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes extends Imprimivel {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public paraTexto(): void {
    console.log(JSON.stringify(this.negociacoes));
  }
}