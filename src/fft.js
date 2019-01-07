'use strict';

const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

function fft(signal) {
  let real = tf.tensor1d(signal.re);
  let imag = tf.tensor1d(signal.im);
  let data = tf.complex(real, imag);

  let result = data.fft();

  return {
    x: signal.x,
    re: Array.from(tf.real(result).dataSync()),
    im: Array.from(tf.imag(result).dataSync())
  };
}

module.exports = fft;
