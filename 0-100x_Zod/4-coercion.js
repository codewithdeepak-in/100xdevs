const zod = require('zod');


/*
    Coercion is automatic conversion of data types from one data type to another data type.
*/

let a = 23;
let b = "24";

console.log(a + b); 
// output -> 2324

console.log(a +  +b); 
// Here is the output is also 47.


b = Number(b);

console.log(a + b); // 47 will be the output.
console.log(typeof b); // output -> number


/*
    Coercion in Zod.
*/

const schema = zod.coerce.string();

console.log(schema.parse("23"));
console.log(schema.parse(23));

// convert it into string. as it was created in schema.
/*

    z.coerce.string(); // String(input)
    z.coerce.number(); // Number(input)
    z.coerce.boolean(); // Boolean(input)
    z.coerce.bigint(); // BigInt(input)
    z.coerce.date(); // new Date(input)

    // can be done for different types of data.
*/


