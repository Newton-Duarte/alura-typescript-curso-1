export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(mensagem: T): string;

  public update(mensagem: T): void {
    const template = this.template(mensagem);
    this.elemento.innerHTML = template;
  }
}