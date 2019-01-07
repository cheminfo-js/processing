'use strict';

const fs = require('fs');
const { join } = require('path');

const { csa1Hfid } = require('./data/dataTest');

const fft = require('../src/fft');

let result = fft(csa1Hfid);

fs.writeFileSync(join(__dirname, 'web', 'data.json'), JSON.stringify(result));
