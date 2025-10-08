import { DogImage } from './DogImage.js';

const button = document.getElementById('btnDogImage');
const div = document.getElementById('dogImageOutput');

button.addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Recurso não encontrado ou servidor não disponível. Tente novamente mais tarde.');
            }
        })
        .then(json => {
            const dog = new DogImage(json);
            dog.renderFrom(div);
        })
        .catch(error => {
            renderError(error);
        });
});

function renderError(error) {
    div.innerHTML = "";
    const h2 = document.createElement('h2');
    h2.textContent = error;
    div.appendChild(h2);
}