import Tamagotchi from './tg-model.mjs'
//https://gist.github.com/aerospark/80c60e801398fd961e3f

export const doCycle = (tamagotchi) => {
    doRandomEvent(tamagotchi);
    tamagotchi.hunger++;
    tamagotchi.toilet++;
    tamagotchi.energy--;
    tamagotchi.age+=2;

    return tamagotchi;
}

export const doSleep = (tamagotchi) => {
    tamagotchi.energy += 256;
    return tamagotchi;
}

export const doRandomEvent = (tamagotchi) => {
    switch(getRandomInt(32)){
        case 12: 
            tamagotchi.hunger++;
            break;
        case 16: 
            tamagotchi.energy--;
            break;
        case 18:  
            tamagotchi.energy++;
            break;
        case 20: 
            tamagotchi.toilet++;
            break;
        case 7: 
            tamagotchi.happiness++;
            break;
        case 4: 
            tamagotchi.happiness--;
            break;
    }

    return tamagotchi;
}

const getRandomInt  = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}