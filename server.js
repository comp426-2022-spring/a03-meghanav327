import minimist from 'minimist';
import express from 'express';

import { coinFlips, countFlips, coinFlip, flipACoin } from "./modules/coin.mjs";

const express = require('express')
const app = express()
const arg = minimist(process.argv.slice(2))