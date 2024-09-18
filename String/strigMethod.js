//The charAt() method returns the character at a specified index (position) in a string:
let text = "HELLO WORLD";
let char = text.charAt(0);
//The charCodeAt() method returns the code of the character at a specified index in a string:

//The method returns a UTF-16 code (an integer between 0 and 65535).
let char1= text.charCodeAt(0);

console.log(char1);
const name = "santhosh";
let letter = name.at(2);
/*The at() method is a new addition to JavaScript.

It allows the use of negative indexes while charAt() do not.

Now you can use myString.at(-2) instead of charAt(myString.length-2).*/
//slice() extracts a part of a string and returns the extracted part in a new string.

//The method takes 2 parameters: start position, and end position (end not included).
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13);
//substring() is similar to slice().

//The difference is that start and end values less than 0 are treated as 0 in substring().
let part1 = str.substring(7, 13);
//If you omit the second parameter, substring() will slice out the rest of the string.
//substr() is similar to slice().

//The difference is that the second parameter specifies the length of the extracted part.
let part2 = str.substr(7, 6);
//If the first parameter is negative, the position counts from the end of the string.
let part3= str.substr(-4);
// string is converted to upper case with toUpperCase():

//A string is converted to lower case with toLowerCase():

let text2 = text1.toUpperCase();
let text3=text1.toLowerCase();
//concat() joins two or more strings:
let text4 = "Hello";
let text5 = "World";
let text6 = text4.concat(" ", text5);
//The trim() method removes whitespace from both sides of a string:
let text7 = text1.trim();
//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let c=text1.trimStart();
//he trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let d=text1.trimEnd();
//added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.
//The padStart() method pads a string from the start.

//It pads a string with another string (multiple times) until it reaches a given length
//The padEnd() method pads a string from the end.
let padded1= text.padStart(4,"0");
//It pads a string with another string (multiple times) until it reaches a given length
let padded = text.padEnd(4,"0");
/*The repeat() method returns a string with a number of copies of a string.

The repeat() method returns a new string.

The repeat() method does not change the original string.*/
//repeat() is not supported in Internet Explorer.
//The replace() method replaces a specified value with another value in a string:
let text8 = "santhosh is good boy";
let newText = text8.replace("good", "bad");
//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
//A string can be converted to an array with the split() method:
/*text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:*/
