const prompt = require('prompt-sync')();

const x1 = prompt('Please enter x1: ');
const y1 = prompt('Please enter y1: ');
const x2 = prompt('Please enter x2: ');
const y2 = prompt('Please enter y2: ');

const dx = x2 - x1;
const dy = y2 - y1;

const coordSum = dx**2 + dy**2;

const distance = coordSum**0.5;

console.log('Distance is', distance);