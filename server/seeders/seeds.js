const fs = require('fs');
const mongoose = require('mongoose');
const db = require('../config/connection');
const { Response, User } = require('../models');

const data = JSON.parse(
    fs.readFileSync(`${__dirname}/data/foam-seed.json`, "utf-8")
);