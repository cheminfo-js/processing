'use strict';

const fs = require('fs');
const { join } = require('path');

module.exports = {
  csa1Hfid: JSON.parse(fs.readFileSync(join(__dirname, 'json', 'fid.1h.json'))),
  csa1Hft: JSON.parse(fs.readFileSync(join(__dirname, 'json', 'ft.1h.json')))
};
