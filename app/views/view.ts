export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  abstract template(mensagem: T): string;

  update(mensagem: T): void {
    const template = this.template(mensagem);
    this.elemento.innerHTML = template;
  }
}