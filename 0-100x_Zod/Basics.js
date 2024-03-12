const zod = require('zod');

const isString = zod.string().min(5, { message: "Must be 5 or more characters long"});

isString.parse('err')


const stringSchema = zod.string({
    required_error: "Name is required",
    min_length: 3,
    max_length: 10,
    invalid_type_error: "Name must be an String"
});


const result = stringSchema.safeParse(23); 
// const result1 = stringSchema.parse(23); // throw error if data type does not match.

console.log(result.error.errors[0].message);




const object = zod.object({
    username: zod.string(),
    password: zod.number()
})


const result2 = object.safeParse({
    username: 'SNVA1',
    password: 2324
})



/*

z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.symbol();

// empty types
z.undefined();
z.null();
z.void(); // accepts undefined

// catch-all types
// allows any value
z.any();
z.unknown();

// never type
// allows no values
z.never();

*/


// Validations 

// validations
// z.string().max(5);
// z.string().min(5);
// z.string().length(5);
// z.string().email();
// z.string().url();
// z.string().emoji();
// z.string().uuid();
// z.string().cuid();
// z.string().cuid2();
// z.string().ulid();
// z.string().regex(regex);
// z.string().includes(string);
// z.string().startsWith(string);
// z.string().endsWith(string);
// z.string().datetime(); // ISO 8601; default is without UTC offset, see below for options
// z.string().ip(); // defaults to IPv4 and IPv6, see below for options

// // transformations
// z.string().trim(); // trim whitespace
// z.string().toLowerCase(); // toLowerCase
// z.string().toUpperCase(); // toUpperCase


// Numbers 
// z.number().gt(5);
// z.number().gte(5); // alias .min(5)
// z.number().lt(5);
// z.number().lte(5); // alias .max(5)

// z.number().int(); // value must be an integer

// z.number().positive(); //     > 0
// z.number().nonnegative(); //  >= 0
// z.number().negative(); //     < 0
// z.number().nonpositive(); //  <= 0

// z.number().multipleOf(5); // Evenly divisible by 5. Alias .step(5)

// z.number().finite(); // value must be finite, not Infinity or -Infinity
// z.number().safe(); // value must be between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER