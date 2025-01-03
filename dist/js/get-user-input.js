import { Infos } from './ImportantInfos.js';
import { getContinentByCity } from './get-city-contient.js';
import { makeClockWork } from './make-clock-work.js';
export function getPlaceInput(inputPlace) {
    Infos.TownName = inputPlace.value;
    getContinentByCity(Infos.TownName).then((continent) => {
        Infos.getContinent = continent || 'unknown';
        if (continent) {
            makeClockWork(continent, Infos.TownName);
        }
        else {
            console.log('Continent not found');
        }
    });
    const placeHeaderEL = document.getElementById('place-header');
    placeHeaderEL.innerText = inputPlace.value;
}
