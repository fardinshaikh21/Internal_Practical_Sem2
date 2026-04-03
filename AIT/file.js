const fs = require('fs');

fs.writeFile('file.txt', 'Hello Node.js', (err) => {   
    if (err) throw err;
    console.log('File written successfully');
}); 

fs.appendFile('file.txt', '\nAppended Text', (err) => {
    if (err) throw err;
    console.log('File appended successfully');
});

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// fs.unlink('file.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully');
// });