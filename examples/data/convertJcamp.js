'use strict';

const fs = require('fs');
const { join } = require('path');

const { createTree, convert } = require('jcampconverter');

let files = fs
  .readdirSync(join(__dirname, 'jcamp'))
  .filter((entry) => entry.match(/dx$/));

for (let file of files) {
  let jcamp = fs.readFileSync(join(__dirname, 'jcamp', file), 'utf8');
  let tree = createTree(jcamp);

  let fid = tree[0].children[0];
  let ft = tree[0].children[1];

  let parsedFID = convert(fid.jcamp, { xy: true, keepSpectra: true });
  let parsedFT = convert(ft.jcamp, { xy: true, keepSpectra: true });

  let toSaveFID = {
    x: parsedFID.spectra[0].data[0].x,
    re: parsedFID.spectra[0].data[0].y,
    im: parsedFID.spectra[1].data[0].y
  };
  fs.writeFileSync(
    join(__dirname, 'json', `fid.${file.replace(/dx$/, 'json')}`),
    JSON.stringify(toSaveFID)
  );

  let toSaveFT = {
    x: parsedFT.spectra[0].data[0].x,
    re: parsedFT.spectra[0].data[0].y,
    im: parsedFT.spectra[1].data[0].y
  };

  fs.writeFileSync(
    join(__dirname, 'json', `ft.${file.replace(/dx$/, 'json')}`),
    JSON.stringify(toSaveFT)
  );
}
