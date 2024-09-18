//A capturing group is created by enclosing a portion of the regex pattern in parentheses (). The matched text within these parentheses is captured and can be retrieved or referenced later.
const str = 'John Doe, 30';
const regex = /(\w+) (\w+), (\d+)/;
const match = regex.exec(str);

console.log(match[0]); // Outputs: 'John Doe, 30'
console.log(match[1]); // Outputs: 'John'
console.log(match[2]); // Outputs: 'Doe'
console.log(match[3]); // Outputs: '30'
//If you need to group parts of a pattern without capturing them, you can use non-capturing groups, which are denoted by (?:...).
const st2r = 'abc def ghi';
const regex2 = /(?:abc|def) ghi/;
const match2 = regex.exec(str);

console.log(match[0]); // Outputs: 'def ghi'

const str3 = 'John Doe';
const regex3 = /(?<firstName>\w+) (?<lastName>\w+)/;
const match3 = regex.exec(str);

console.log(match.groups.firstName); // Outputs: 'John'
console.log(match.groups.lastName);  // Outputs: 'Doe'
const regex1 = /cat(?! fish)/;
const str1 = 'cat';
const str2 = 'cat fish';

console.log(regex1.test(str1)); // Outputs: true
console.log(regex1.test(str2)); // Outputs: false

