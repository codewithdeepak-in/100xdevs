const zod = require('zod');

const stringSchema = zod.string();
const numberSchema = zod.number();
const bigint = zod.bigint();
const booleanSchema = zod.boolean();
const data =  zod.date();
const symbolSchema = zod.symbol();
const undefinedSchema = zod.undefined();
const nullSchema = zod.null();
const voidSchema = zod.void();
const anySchema = zod.any();
const unknownSchema = zod.unknown();
const neverSchema = zod.never();

console.log(stringSchema.safeParse('StringSchema'));
console.log(numberSchema.safeParse(42));
console.log(bigint.safeParse(233n)); // n denote bigint.
console.log(booleanSchema.safeParse(false));
console.log(data.safeParse(new Date()));
console.log(symbolSchema.safeParse('example'));
console.log(undefinedSchema.safeParse(undefined))
console.log(nullSchema.safeParse(null));
console.log(voidSchema.safeParse()); // true as it empty.
console.log(anySchema.safeParse('anythingwillbetrue'))
console.log(unknownSchema.safeParse(23));
console.log(neverSchema.safeParse().error);







