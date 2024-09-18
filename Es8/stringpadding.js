//In JavaScript, string padding refers to adding characters to the beginning or end of a string to achieve a desired length
const str = '5';
console.log(str.padStart(3, '0')); // Outputs: '005'
//padding with multiple character
const code = '42';
console.log(code.padStart(6, 'AB')); // Outputs: 'ABAB42'
//padding with string lenth greater than target length
const str2 = 'hello';
console.log(str.padStart(3, '*')); // Outputs: 'hello' (no padding needed as target length is less than string length)
