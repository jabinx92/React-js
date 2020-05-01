//ARROW FUNCTION RECAP

//declare const with arrow function in brackets with one argument, followed by curly brackets
const printMyName = (name) => {
    console.log(name);
}
printMyName('johnny')

//if your arrow function only has one argument, you dont need parenthesis
let printed = name => {
    console.log(name);
}
printed('johnny');

//if your arrow function has more than one argument, you need parenthesis
const print =(name, age) => {
    console.log(`${name} and I am ${age}`);
}
print('johnny',28);

//if your arrow function has no arguments, you need parenthesis
let prnt = () => {
    console.log(`This has no input parameters! Just Run!`);
}
prnt()

const printName = (name, age = 28) => {
    console.log(`${name} and ${age}`)
}
printName('jason')

//this example returns number * 2 without curly brackets
let multiply = (number) => number * 2;
    console.log(multiply(2))

//
const multiplyAgain = (number) => {
    return number * 44
}
console.log(multiplyAgain(9))

//default

let printer = (name, age, location, gender, occupation) => {
    console.log(`Hi, my name is ${name} and I am ${age} years old. I reside in ${location}. I am a ${gender} ${occupation}`);
};

printer('johnny', 28, 'Danville', 'M', 'Software Engineer' );

//===============================================================================
//Writing modular code
//Javascript modules
    //split up your code into separate components, therefore easier to maintain and organize

    //default keyword - when you import, 'import prs from './utility.js' is same as 'import person from './utility.js
    //default export
        // import person from './person.js'
            //is the same as
        // import prs from './person.js'



// import {double as doubleTheNumber} from 'utility.js'; //as changes name of function imported to doubleTheNumber

// import * as bundled from './utility.js' // '*' if you have multiple functions and assigned variables.

// doubleTheNumber(5);

//===============================================================================
//CLASSES - blueprints of javascript objects that have values and methods

class Human {
    constructor() {
        this.gender ='male';
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super(); // must have this for extends
        this.name = 'Max';
        this.gender = 'female';
    }
    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

//===============================================================================
//CLASSES, PROPERTIES, AND METHODS
//Properties are like "variables attached to classes/ objects"
//Methods are like "functions attached to classes/ objects"

//Now lets look at next generation that uses babel
//this class ignores 'this' and uses arrow functions

class Human2 {
    gender = 'male';

    printGender  = () => {
        console.log(this.gender);
    }
}

class Person2 extends Human {
    name = 'Max';
    gender = 'female'

    printMyName = () => {
        console.log(this.name);
    }
}

const person2 = new Person();
person2.printMyName();
person2.printGender();

/*SPREAD AND REST OPERATOR
'...'
spread - used to split up array elements or object properties
    ex - const newArray = [...oldArray,1,2]
         const newObject = {...oldObject, newProp: 5}

rest - used to merge a list of function arguments into an array
    ex - function sortArgs(...args){
        return args.sort();
    }
*/

const number = [1,2,3];
const newNumbers = [...number,4,5];

console.log(newNumbers); //[1,2,3,4,5]

const person3 = {
    name: 'Max'
};

const newPerson = {
    ...person3,
    age:28
}

console.log(newPerson); // {name: 'Max, age: 28}

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3)); //[1]

//===============================================================================
/*
DESTRUCTURING - easily extract array elements or object properties and store them in variables
*/

//array destructuring
let a, b, rest;
[a,b] = [10,20];

console.log(a); // 10
console.log(b); //20

[a, b, ...rest] = [10,20,30,40,50];

console.log(rest); // [30,40,50]

//object destructuring
({name, age} = {name: 'Max', age: 28})
console.log(name) //Max
console.log(age) //undefined

// ({a,b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); //{c: 30, d: 40}

const numbers = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1, num3);

//================================================================
//Reference and primitive type refresher
const num = 1;
const num2 = num;
console.log(num2); //1

const person1 = {
    name: 'Max'
}

const secondPerson = {
    ...person1
};

person1.name = 'Manu';

console.log(secondPerson); //{ name: 'Max' }

//================================================================
//Refreshing array functions

const double = [1,2,3];

const doubleNumArray = double.map(x => x * 2); 
//const doubleNumArray = numbers.map((num) => {
    // return num * 2;
// }) this works also
console.log(double)
console.log(doubleNumArray)

//==================================================================
//Next-Gen Javascript - Summary
/*
let and const basically replace var. You use let instead of var and const instead of var if you plan on never re-assigning this"variable" (effectively turning it into a constant therefore)

ES6 Arrow Functions
Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Arrow functions are different way of creating functions in Javascript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this keyword.

Arrow functions syntax may look strange but it's actually simple.
    function callMe(name) {
        console.log(name);
    }

which you could also write as:
    const callMe = function(name) {
        console.log(name);
    }

becomes:
    const callMe = (name) => {
        console.log(name);
    }

IMPORTANT
when having no arguments, you have to use empty parenthese in the function declaration:
const callMe = () => {
    console.log("Johnny!")
}

when having exactly one argument, you may omit the parentheses:

const callMe = name => {
    console.log(name);
}

when just returning a value, you can use the following shortcut:
const returnMe = name => name
which is equal to:
const returnMe = name => {
    return name;
}

Exports and imports:
In React projects(and actually in all modern javascript projects, you split your code across mutltiple javascript files - so called modules. you do this to keep each file/ module focused and manageable.)

to still access functionality in another file, you need export(to make it available) and import (to get access) statements.

You get two different types of exports: default(unnamed) and named exports:
default => export default ...;
named => export const someData = ...;
You can import default exports like this:
import someNameOfYourChoice from './path/to/file.js';
Surprisingly, someNameOfYourChoice is totally up to you.
Named exports have to be imported by their nameL
import {someData} from './path/to/file.js';

A file can only contain one default and an unlimited amount of named exports. You can also mix the  one default with any amount of named exports in one and the same file.

When importing named exports, you can also import all named exports at once with the following syntax:
import * as upToYou from './path/to/file.js';

upToYou is - well- up to you and simply bundles all exported variables./functions in one javascript object. for example, if you export const someData = ...(/path/to/file.js) you can access it on upToYou like this: upToYou.someData.
*/