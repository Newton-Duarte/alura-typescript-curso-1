import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  url = 'http://localhost:8080/dados';

  obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch(this.url)
      .then((res) => res.json())
      .then((dados: NegociacaoDoDia[]) => {
        return dados.map((dado) => new Negociacao(new Date, dado.vezes, dado.montante));
      });
  }
}