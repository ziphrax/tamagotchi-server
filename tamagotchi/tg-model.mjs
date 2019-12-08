import mongoose from 'mongoose'

//https://gist.github.com/aerospark/80c60e801398fd961e3f

const tamagotchiSchema = new mongoose.Schema({
    name : { type: String },
    owner: { type: ObjectId },
    age: { type: Number },
    energy: { type: Number },    
    health: { type: Number },
    hunger: { type: Number },
    happiness: { type: Number },
    toilet: { type: Number },
    last_cycle: { type: Date },
    born: { type: Date, default: Date.now}
})

const Tamagotchi = mongoose.model('Tamagotchi', tamagotchiSchema);

export const AGE_HATCH = 128;
export const AGE_MATURE = 796;
export const AGE_DEATH = 8192;

export const HUNGER_CANEAT = 32;
export const HUNGER_NEEDSTOEAT = 128;

export const HUNGER_SICKFROMNOTEATING = 256;
export const HUNGER_DEADFROMNOTEATING = 512;

export const ENERGY_CANSLEEP = 150;
export const ENERGY_TIRED = 64
export const ENERGY_PASSOUT = 8;

export const TOILET_MUSTGO = 256;

export default Tamagotchi;