// npm install prompt-sync

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter number: "));
let isPrime = true;

if (num <= 1) isPrime = false;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime" : "Not Prime");