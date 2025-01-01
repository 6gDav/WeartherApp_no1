import { theTownNmae } from './TheTownName.js';
export function getPlaceInput(inputPlace) {
    console.log(inputPlace.value);
    theTownNmae.townNmae = inputPlace.value;
    const placeHeaderEL = document.getElementById('place-header');
    placeHeaderEL.innerText = inputPlace.value;
}
