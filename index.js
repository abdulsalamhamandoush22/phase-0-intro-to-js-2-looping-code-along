// Code your solutions in this file
const sinon = require('sinon');

function writeCards(names, event) {
  return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
}

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}