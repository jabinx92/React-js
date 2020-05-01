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

const person = {
    name: 'max'
}

export default person

// export const clean = () => {...}

export const baseData = 10;

import {double} from './utils.js';

console.log(double(5))
