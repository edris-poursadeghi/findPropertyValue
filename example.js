const findPropertyValue = require('./index');

const data = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];
const property = 'age';

const result = findPropertyValue(data, property);
console.log(result); // Output: 25