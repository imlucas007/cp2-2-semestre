import { CatFact } from './CatFact.js';

const button = document.getElementById('btnCatFact');
const div = document.getElementById('catFactOutput');

button.addEventListener('click', function() {
    fetch('https://catfact.ninja/fact')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Recurso não encontrado ou servidor não disponível. Tente novamente mais tarde.');
            }
        })
        .then(json => {
            const cat = new CatFact(json);
            cat.renderFrom(div);
        })
        .catch(error => {
            renderError(div, error);
        });
});

function renderError(container, error) {
    container.innerHTML = '<p style="color:red;">' + error.message + '</p>';
}