const fs = require('fs');
const os = require('os');
const path = require('path');

// fs.writeFileSync('hello.txt', 'Hello, World!');
// const data = fs.readFileSync('hello.txt', 'utf-8');
// console.log('File Content:', data);

fs.writeFile('demo.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});

fs.readFile('demo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Platform:", os.platform());
console.log("CPU Arch:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));