import { Activity } from './Activity.js';
import { DogImage } from './DogImage.js';


const activityBtn = document.getElementById('btnActivity');
const activityDiv = document.getElementById('activityOutput');
activityBtn.addEventListener('click', function() {
    const apiUrl = 'https://api.allorigins.win/raw?url=https://bored-api.appbrewery.com/random';
    fetch(apiUrl)
        .then(res => res.ok ? res.json() : Promise.reject('Falha na API Bored'))
        .then(json => {
            const activity = new Activity(json);
            activity.renderFrom(activityDiv);
        })
        .catch(err => renderError(err, activityDiv));
});


const dogBtn = document.getElementById('btnDogImage');
const dogDiv = document.getElementById('dogImageOutput');
dogBtn.addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.ok ? res.json() : Promise.reject('Falha na API Dog'))
        .then(json => {
            const dog = new DogImage(json);
            dog.renderFrom(dogDiv);
        })
        .catch(err => renderError(err, dogDiv));
});


function renderError(error, container) {
    container.innerHTML = "";
    const h2 = document.createElement('h2');
    h2.textContent = error;
    container.appendChild(h2);
}