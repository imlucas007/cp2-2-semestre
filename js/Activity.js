export class Activity {
    constructor(data) {
        this.activity = data.activity;
        this.type = data.type;
    }

    renderFrom(container) {
        container.innerHTML = "";

        if (this.activity) {
            const h3 = document.createElement('h3');
            h3.textContent = "Atividade sugerida:";
            const p = document.createElement('p');
            p.textContent = this.activity;

            const small = document.createElement('small');
            small.textContent = `Tipo: ${this.type}`;

            container.appendChild(h3);
            container.appendChild(p);
            container.appendChild(small);
        } else {
            const p = document.createElement('p');
            p.textContent = "Não foi possível carregar uma atividade agora.";
            container.appendChild(p);
        }
    }
}