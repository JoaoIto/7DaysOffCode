import { formInput } from './controller/main'

const formObject = new formInput();
const form = document.querySelector(".form");

form?.addEventListener('submit', event => {
    event.preventDefault();
    formObject.mostra();
})