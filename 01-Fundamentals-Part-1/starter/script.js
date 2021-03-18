
/*
let js = 'amazing';

console.log(40 + 8 + 23 + 10);



console.log("Ben");
console.log(23);

let firstName = "Benjamin";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);


let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
console.log(myCurrentJob);


let jsIsFun = true;
console.log(jsIsFun);
*/

//declaring variables
//var, let(can change), and const (constants can not change or be empty)
/*
let age = 30;
age = 35;

const birthYear = 1990;
*/
//birthYear =
//const job;



//Operators
/*
const now = 2037;
const ageBen = now - 1996;
const ageHaylee = now - 1995;
console.log(ageBen, ageHaylee);

console.log(ageBen * 2, ageBen / 10, 2 ** 3);
//2**3 means 2 to the power of 3

const fn = 'Ben';
const ln = 'Adams'

console.log(fn + ' ' + ln);

let x = 10 + 5;
x += 10; //x=x+10
console.log(x);
*/
/*
const now = 2037;
const ageBen = now - 1996;
const ageHaylee = now - 1995;
console.log(now - 1991 > now - 2018);

let x, y
x = y = 25 - 10 - 5; //x=y=10
console.log(x, y)
const averageAge = (ageBen + ageHaylee) / 2
console.log(ageBen, ageHaylee, averageAge);
*/

//Template literals
/*
const firstName = 'Ben';
const job = 'student';
const birthYear = 1996;
const year = 2037;

const ben = "I'm " + firstName + " and am a " + job + " and am " + (year - birthYear) + " Years old";

console.log(ben)

const benNew = `I'm ${firstName}, a ${job}, and ${year - birthYear} years old`;
console.log(benNew)


console.log(`Just writing strings...
with multiple
lines`)
*/

//Starting If/ Elses
/*
const age = 1;

if (age >= 18) {
    console.log(`Sara can start driving license`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah has to wait another ${yearsLeft} years!`)
}

let century
const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)*/

//type conversion
/*
const inputYear = 'ben';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(String(23), 23);

//type coercion
console.log(`I am ` + 23 + ` years old`)
console.log(`23` * `2`)
console.log(`23` > `18`)*/

//Truthy and Falsey values
//5 falsey values: 0, '', undefined, null NaN... and false

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Ben'))
console.log(Boolean({}))
console.log(Boolean(false))

const money = 0;
if (money) {
    console.log("Dont spend it all")
} else {
    console.log("Grab a job")
}
