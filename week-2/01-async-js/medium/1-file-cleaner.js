// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs');


fs.readFile('./text.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    const filteredData = data.replace(/\s+/g, ' ');
    // Remove all the extra spaces.
    console.log(filteredData);
});