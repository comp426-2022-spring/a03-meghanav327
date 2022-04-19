import minimist from 'minimist';
import express from 'express';

import { coinFlips, countFlips, coinFlip, flipACoin } from "./modules/coin.mjs";

const express = require('express')
const app = express()

const arg = require('minimist')(process.argv.slice(2))
args['port']
const port = args.port || process.env.PORT || 5000

const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
});