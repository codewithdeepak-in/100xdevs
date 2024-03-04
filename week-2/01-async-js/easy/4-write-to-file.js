// ## Write to a file
// Using the fs library again, Try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');

fs.writeFile('testing.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});