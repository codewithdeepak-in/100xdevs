const zod = require('zod');


const user = zod.object({
    name: zod.string(),
    age: zod.number()
})


const userParse = user.parse({
    name: 'John',
    age: 30
})

console.log(userParse) // {name: 'John', age: 30}

/*

const wrongParsed = userParse.parsed({
    name: 'John',
    age: 'thirty years old'
})

// Throw ZodError.

*/

const userParse2 = user.safeParse({
    name: 'John',
    age: 30
})
console.log(userParse2) // {success: true, data: {name: 'John', age: 30}},

const wrongParsed2 = user.safeParse({
    name: 'John',
    age: 'thirty years old'
});
console.log(wrongParsed2); // {success: false, error: [Getter]}