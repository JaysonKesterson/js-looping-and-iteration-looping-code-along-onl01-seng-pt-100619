// Code your solutions in this file

function writeCards(array, name) {
for (let i = 0; i < array.length; i++) {
    let newarray = [];
    newarray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
  }
  return newarray;
}