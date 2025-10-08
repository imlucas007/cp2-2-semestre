import { Activity } from './Activity.js';

const button = document.getElementById('btnActivity');
const div = document.getElementById('activityOutput');

button.addEventListener('click', function() {
    // Eu tive que recorrer a ajuda porque o navegador estava bloqueando a API, durante a aula você só testou usando no Node, então como não estava funcionando fiz desse jeito
    const apiUrl = 'https://api.allorigins.win/raw?url=https://bored-api.appbrewery.com/random';

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Recurso não encontrado ou servidor não disponível. Tente novamente mais tarde.');
            }
        })
        .then(json => {
            const activity = new Activity(json);
            activity.renderFrom(div);
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