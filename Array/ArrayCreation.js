//Creating the array using literals
const num=[1,2,3,4,5,6,7];//using literals is the common and easiest way to create array
console.log(num);
 
//another waay to create the array
const arr =[];
//add elements in the array
arr[0]='santhosh';
arr[1]='jhon';
arr[2]='nick';
console.log(arr);

//creaating the array using constructor
const arr1=new Array("apple","banana","orange");
console.log(arr1);
//array has index based index start from 0
//Accessing frist element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
console.log(fruit);
// to Aceesing the last element
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
let x = fruit1[fruit1.length-1];
console.log(x);
// adding Element in array using push function
const fruits1 = ["Banana", "Orange", "Apple"];
fruits1.push("Lemon");  // Adds a new element (Lemon) to fruit
