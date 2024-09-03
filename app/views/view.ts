export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar: boolean = false) {
    const elemento = document.querySelector(seletor);

    if (!elemento) throw Error(`Seletor ${seletor} não existe no DOM. Verifique :) please.`);

    this.elemento = elemento as HTMLElement;

    if (escapar) this.escapar = escapar;
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    const antXSS = /<script>[\s\S]*?<\/script>/;
    let template = this.template(model);
    if (this.escapar) template = template.replace(antXSS, "");

    this.elemento.innerHTML = template;
  }
}
