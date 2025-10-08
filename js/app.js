import { Activity } from './Activity.js';
import { DogImage } from './DogImage.js';
import { CatFact } from './CatFact.js';

const activityBtn = document.getElementById('btnActivity');
const activityDiv = document.getElementById('activityOutput');
activityBtn.addEventListener('click', function() {
    const apiUrl = 'https://api.allorigins.win/raw?url=https://bored-api.appbrewery.com/random';
    fetch(apiUrl)
        .then(res => res.ok ? res.json() : Promise.reject({message: 'Falha na API Bored'}))
        .then(json => {
            const activity = new Activity(json);
            activity.renderFrom(activityDiv);
        })
        .catch(err => renderError(activityDiv, err));
});

const dogBtn = document.getElementById('btnDogImage');
const dogDiv = document.getElementById('dogImageOutput');
dogBtn.addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.ok ? res.json() : Promise.reject({message: 'Falha na API Dog'}))
        .then(json => {
            const dog = new DogImage(json);
            dog.renderFrom(dogDiv);
        })
        .catch(err => renderError(dogDiv, err));
});

const catBtn = document.getElementById('btnCatFact');
const catDiv = document.getElementById('catFactOutput');
catBtn.addEventListener('click', function() {
    fetch('https://catfact.ninja/fact')
        .then(res => res.ok ? res.json() : Promise.reject({message: 'Falha na API Cat'}))
        .then(json => {
            const cat = new CatFact(json);
            cat.renderFrom(catDiv);
        })
        .catch(err => renderError(catDiv, err));
});

function renderError(container, error) {
    container.innerHTML = '<p style="color:red;">' + (error.message ?? error) + '</p>';
}