export class CatFact {
    constructor(data) {
        this.fact = data.fact;
    }

    renderFrom(container) {
        container.innerHTML = "";
        const p = document.createElement('p');
        p.textContent = this.fact;
        container.appendChild(p);
    }
}