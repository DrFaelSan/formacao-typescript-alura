export class View {
    constructor(seletor, escapar = false) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (!elemento)
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique :) please.`);
        this.elemento = elemento;
        if (escapar)
            this.escapar = escapar;
    }
    update(model) {
        const antXSS = /<script>[\s\S]*?<\/script>/;
        let template = this.template(model);
        if (this.escapar)
            template = template.replace(antXSS, "");
        this.elemento.innerHTML = template;
    }
}
