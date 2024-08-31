import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona() {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    console.log("negociacoes :", this.negociacoes.lista());
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g,
      data = new Date(this.inputData.value.replace(exp, ",")),
      quantidade = parseInt(this.inputQuantidade.value),
      valor = parseFloat(this.inputValor.value);

    return new Negociacao(data, quantidade, valor);
  }

  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
