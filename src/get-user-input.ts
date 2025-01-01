import { theTownNmae } from './TheTownName.js';

export function getPlaceInput(inputPlace: HTMLInputElement)
{
    console.log(inputPlace.value);
    theTownNmae.townNmae = inputPlace.value;
    const placeHeaderEL: HTMLHeadingElement = document.getElementById('place-header')! as HTMLHeadingElement;
    placeHeaderEL.innerText = inputPlace.value;
}