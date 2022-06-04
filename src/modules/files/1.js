


import s from './a.json'  assert { type: "json" };
let unknownObject = import('./b.json', { assert: { type: 'json' } }) ;

console.log(unknownObject)