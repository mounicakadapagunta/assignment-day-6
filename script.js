
//1.question
//script.js
window.alert("I m invoked!")
//-----------------------------------------------------------
/*2.question
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
    1
    + 2); // this is multiple line code and its working*/

//corected code
window.alert("I'm JavaScript!");
window.alert("I'm JavaScript!");
window.alert('Hello')
window.alert('World')
alert(3 + 1 + 2);
// --------------------------------------------------------
/*3.question
let admin = 9, fname = 10.5;
fname = "Guvi";
lname = "geek"
admin = fname + lname;
alert(admin); */

//corected code
let admin = 9, fname = 10.5;
fname = "Guvi";
lname = "geek";
admin = fname + " " + lname;
alert(admin);
//-------------------------------------------------------------------

/*4.question
let fname = 10.5;
fname = "Guvi";
lname = "geek"
let name = fname + lname;
alert('hello ${name}');*/
//corredted code 
let fname = 10.5;
fname = "Guvi";
lname = "geek";
let name2 = fname + lname;
alert("hello" + name2);
//--------------------------------------------------------------------

/*5.question
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);*/
//corredted code
let a = prompt("First number");
let b = prompt("Second number");
let sum = parseFloat(a) + parseFloat(b);
window.alert(sum);
//-------------------------------------------------------------------

/*question
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);*/
//corredted code
let a = prompt("First number?");
let b = prompt("Second number?");
window.alert(a + b);

//--------------------------------------------------------
/*question code
var a = "2" > "12";
//Don't touch below this
if (a) {
    console.log("Code is Blasted")
}
else {
    console.log("Diffused")
}*/
//corredted code
var a = 2 > 12;
//Don't touch below this
if (a) {
    console.log("Code is Blasted")
}
else {
    console.log("Diffused")
}
//--------------------------------------------------------------
/*question code
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
    console.log('OMG it works for any number inc 0');
}
else {
    console.log("Success");
}*/
//corredted code
let a = 3 > 14
//Don't modify any code below this
if (a) {
    console.log('OMG it works for any number inc 0');
}
else {
    console.log("Success");
}
//-----------------------------------------------------------------
/*question code
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
    console.log("You hit a Four");
} else if (value === 6) {
    console.log("You hit a Six");
} else {
    console.log("I couldn't figure out");
}*/
//corredted code
let value = prompt('How many runs you scored in this ball');

switch (value) {
    case '1': console.log("single runs");
        break;

    case '2': console.log("two runs");
        break;

    case '3': console.log("three runs");
        break;

    case '4': console.log("four");
        break;

    case '5': console.log("five runs");
        break;
    case '6': console.log("six runs");
        break;

    default: console.log("dotball");
}
//------------------------------------------------------------------

/*question code
let login = 'Employee';
let message = (login == 'Employee') ? :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';
console.log(message);*/

//corredted code
let login = 'Employee';
let message = "welcome to"

console.log(message + " " + login)
//--------------------------------------------------------------
/*question code
// You cant change the value of the msg
let message;
if (null || 2 || undefined) {
    let message = "welcome boss";
}
else {
    let message = "Go away";
}
console.log(message);*/
//corredted code
let message;
if (null || 2) {
    message = "welcome boss";
}
else {
    message = "Go away";
}
console.log(message);

//---------------------------------------------------------------
/*question code
let message;
let lock = 2;
//Dont change any code below this 
if (null || lock || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message);*/

//corredted code
let message;
let lock = null;
//Dont change any code below this
if (null || lock || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message);
//-----------------------------------------------------------------

/*question code
let message;
let lock = 2;
//Dont change any code below this
if (lock && " " || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message);*/

//corredted code
let message = "boss";
let lock = null;
//Dont change any code below this
if (lock && " " || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message);
//--------------------------------------------------------------------
/*question code
//You can change only 2 characters
let i = 3;
while (i) {
    console.log(--i);
}*/

//corredted code
//You can change only 2 characters
let i = 3;
while (i) {

    console.log(i--);
}
//-------------------------------------------------------------------

/*questioncode
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)*/
//corredted code
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
let sum = 0;
for (let i = 1; i <= 4; i++) {
    for (let j = i; j >= 1; j--) {

        console.log(j)
    }
}
//------------------------------------------------------------------
//corredted code
for (let i = 1; i <= 20; i += 1) {
    if (i % 2 == 0) {
        console.log(i, "even")
    }
}
//----------------------------------------------------------------
/*question code
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    console.log('Wrapped ${'gifts[i]'} and added a bow!');
}*/
//corredted code
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    console.log(gifts[i]);
}
//-----------------------------------------------------------------
/*question code
let countdown = 100;
while (countdown > 0) {
    countdown--;
    if (countdown == 0) {
        console.log("bomb triggered");
    }
}*/

//corredted code
let countdown = 100;
while (countdown > 70) {
    countdown--;
    if (countdown == 0) {
        console.log("bomb triggered");
    }
    else {
        console.log("bomb disarm")
    }
}
//---------------------------------------------------------------
/*question code
var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
    msg += “hi”;
}
if (lemeout) {
    msg += ‘Hello’;
}
console.log(msg);*/

//corredted code
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
    msg += "hi";
}
if (lemeout) {
    msg += 'Hello';
}
console.log(msg);
//--------------------------------------------------------------
/*question code
var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
    msg += “hi”;
}
if (lemeout) {
    msg += ‘Hello’;
}
console.log(msg);*/

//corredted code
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
    msg += "hi";
}
if (lemeout) {
    msg += 'Hello';
}
console.log(msg);




























