import { Form } from "./index.js";

export class formInput{
  inputForm: HTMLInputElement;
  inputName: HTMLInputElement;
  inputData: HTMLInputElement;

  constructor(){
    this.inputForm = document.querySelector("form");
    this.inputName = document.querySelector("#name");
    this.inputData = document.querySelector("#birth-date");
  }

  mostra(): void{
    const dados = this.criaUser();
    console.log(dados);
    this.limparForm();
  }

  criaUser(): Form{
    const exp = /-/g;
    const data = new Date(this.inputData.value.replace(exp, ','));
    const nome = (this.inputName.value);
    return new Form(data, nome);
  }

  limparForm(): void{
    this.inputData.value = "";
    this.inputName.value = "";
    this.inputData.focus();
  }
}