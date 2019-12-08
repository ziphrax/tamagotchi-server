import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'

import bodyParser from 'body-parser'
import passport from 'passport'

import configDb from './config/database.mjs';
import apiRoutes from './routes.mjs';

const app = express();
const port = 3000;

mongoose.connect(configDb.url); 

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use('/api', apiRoutes);

app.listen(port,()=>{
    console.log("tamagotchi-server listening on port %s", port);
});