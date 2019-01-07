'use strict';

const Segment = require('../src');
const convertToAnnotations = require('../annotations/convertToAnnotations');

var segments = [];

for (let i = 0; i < 100; i++) {
  segments.push(
    new Segment(
      { x: Math.random() * 100, y: Math.random() * 60 },
      { x: Math.random() * 100, y: Math.random() * 60 }
    )
  );
}

convertToAnnotations(segments, {
  strokeColor: 'red',
  strokeWidth: '1px',
  strokeType: 'line'
});

