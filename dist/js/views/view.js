export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(mensagem) {
        const template = this.template(mensagem);
        this.elemento.innerHTML = template;
    }
}
