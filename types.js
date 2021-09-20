const prompt = require('prompt-sync')();

const str = 'words and things like that';

const num = 12312;

console.log(str + num);

// ============

const x = '10';
const y = 50;
console.log(y - x);

// ============

const ourSecretVariable = 'hello';

console.log(typeof ourSecretVariable);

console.log(typeof y);

// =============

const input = Number(prompt('Enter anything: '));

console.log('Your value is of type:', typeof input);

console.log('Your value is:', input);
