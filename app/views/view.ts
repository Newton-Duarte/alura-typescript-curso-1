import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLInputElement;
    } else {
      throw Error(`Seletor ${seletor} não existe.`);
    }

    this.escapar = !!escapar;
  }

  protected abstract template(mensagem: T): string;

  public update(model: T): void {
    let template = this.template(model);

    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
  
    this.elemento.innerHTML = template;
  }
}