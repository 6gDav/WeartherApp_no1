import { Infos } from './ImportantInfos.js';
import { getContinentByCity } from './get-city-contient.js';

export function getPlaceInput(inputPlace: HTMLInputElement)
{
    Infos.TownName = inputPlace.value;

    getContinentByCity(Infos.TownName).then((continent) => {
        Infos.getContinent = continent || 'unknown';
        if(continent)
        {
            
        }
        else
        {
            console.log('Continent not found');
        }
    });
    
    const placeHeaderEL: HTMLHeadingElement = document.getElementById('place-header')! as HTMLHeadingElement;
    placeHeaderEL.innerText = inputPlace.value;
}