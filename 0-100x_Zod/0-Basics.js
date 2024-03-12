const zod = require('zod');

// Creating Simple String Schema.

const mySchema = zod.string();

// Parsing.

const parsed = mySchema.parse('Hello World');
console.log(parsed); // => 'Hello World'
/*
const wrongParsed = mySchema.parse(323); // => throws ZodError. 
*/

// Safe parsing (doesn't throw error if validation fails)
const safeParsed = mySchema.safeParse('Hello World');
console.log(safeParsed); // => {success: true, data: 'Hello World'}
const wrongParsed = mySchema.safeParse(234);
console.log(wrongParsed); // => {success: false, error: [Getter]}



