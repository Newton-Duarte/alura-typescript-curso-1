import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    constructor() {
        this.url = 'http://localhost:8080/dados';
    }
    obterNegociacoesDoDia() {
        return fetch(this.url)
            .then((res) => res.json())
            .then((dados) => {
            return dados.map((dado) => new Negociacao(new Date, dado.vezes, dado.montante));
        });
    }
}
