/*When the dotAll flag is used, the dot (.) in a regular expression matches any character, 
including newline characters (\n). By default, the dot does not match newline characters, which means patterns using . 
 not span multiple lines unless the dotAll flag is applie*/
 const str = 'Hello\nWorld';
const regex = /Hello.World/;

console.log(regex.test(str)); // Outputs: false
const text = `First line
Second line
Third line`;

const regex2 = /First.*Third/s;

console.log(regex2.test(text)); // Outputs: true
