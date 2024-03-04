// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
// fs.readFile is asynchronous reading.

fs.writeFile('test.txt', 'And I want to become a full Stack Developer in MERN', (err) => {
    if(err) throw err;
    console.log('saved');
});

fs.appendFile('test.txt', '\n Coding is my hobby and one day i will be the best developer of all time.', (error) => {
    if(error) throw error;
    console.log('appended');
})

fs.unlink('test.txt', (error) => {
    if(error) throw error;
    console.log('deleted');
})