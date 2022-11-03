import { NegociacaoController } from "./controllers/negociacao-controller.js";
const negociacaoController = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        negociacaoController.adiciona();
    });
}
else {
    throw Error('Elemento form não existe.');
}
const btnImportar = document.querySelector('#btn-importar');
if (btnImportar) {
    btnImportar.addEventListener('click', () => {
        negociacaoController.importarDados();
    });
}
else {
    throw Error('Botão importar não foi encontrado.');
}
