import { domInjector } from "../decorators/dom-injector.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView', true);
  private mensagemView = new MensagemView('#mensagemView');
  private negociacoesService = new NegociacoesService();

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update('Apenas negociações em dias úteis são permitidas');
      return;
    }

    this.negociacoes.adiciona(negociacao);
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso!');
    imprimir(negociacao, this.negociacoes);
    this.limpaFormulario();
  }

  public importarDados(): void {
    this.negociacoesService
      .obterNegociacoesDoDia()
      .then((negociacoesDeHoje) => {
        return negociacoesDeHoje.filter((negociacaoDeHoje) => {
          return !this.negociacoes
            .lista()
            .some((negociacao) => negociacao.ehIgual(negociacaoDeHoje));
        });
      })
      .then((negociacoes) => {
        negociacoes.forEach((negociacao) => this.negociacoes.adiciona(negociacao));
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação importadas com sucesso!');
      })
  }

  private limpaFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '1';
    this.inputValor.value = '0.0';
    this.inputData.focus();
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
  }
}