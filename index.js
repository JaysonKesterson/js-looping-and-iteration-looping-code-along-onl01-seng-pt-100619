// Code your solutions in this file

function writeCards(array, name) {
let newarray = [];
for (let i = 0; i < array.length; i++) {
    newarray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
  }
  return newarray;
}