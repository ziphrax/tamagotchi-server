import express from 'express'
import tamagotchiRoute from './tamagotchi/route.mjs'

const router = express.Router();

router.use('/tamagotchi',tamagotchiRoute);

export default router;