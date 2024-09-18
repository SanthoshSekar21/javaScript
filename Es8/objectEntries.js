/*Object.entries() is a built-in method in JavaScript that returns an array of a given object's own enumerable 
string-keyed property [key, value] pairs. This method provides
 a straightforward way to get both the keys and values of an object, 
making it easier to iterate over or manipulate object properties.*/

const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
};

const entries = Object.entries(person);
console.log(entries); 
// Outputs: [['name', 'Alice'], ['age', 30], ['job', 'Engineer']]
const user = {
    id: 1,
    name: 'Bob',
    email: 'bob@example.com'
};

const transformedEntries = Object.entries(user).map(([key, value]) => [key, String(value).toUpperCase()]);
console.log(transformedEntries);
// Outputs: [['id', '1'], ['name', 'BOB'], ['email', 'BOB@EXAMPLE.COM']]
