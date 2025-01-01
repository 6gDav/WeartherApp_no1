console.log('inputPlaceEL');
import { getPlaceInput } from './get-user-input.js';

document.addEventListener("DOMContentLoaded", () => {

    //#region searchInput
    const inputBtn: HTMLButtonElement = document.getElementById('search-btn')! as HTMLButtonElement;

    inputBtn.addEventListener('click', () => {
        const inputPlaceEL: HTMLInputElement = document.getElementById('input-place')! as HTMLInputElement;
        
        if (inputPlaceEL.value)
        {
            getPlaceInput(inputPlaceEL);
            inputPlaceEL.value = '';
        }
    });

    //#endregion
});