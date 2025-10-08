export class DogImage {
    constructor(data) {
        this.imageUrl = data.message;
        this.status = data.status;
    }

    renderFrom(container) {
        container.innerHTML = "";
        if(this.status === "success") {

            const img = document.createElement('img');
            img.src = this.imageUrl;
            img.alt = "Imagem aleatória de cachorro";
            img.style.maxWidth = "350px";
            container.appendChild(img);
        } else {
            const p = document.createElement('p');
            p.textContent = "Não foi possível carregar uma imagem de cachorro agora.";
            container.appendChild(p);
        }
    }
}