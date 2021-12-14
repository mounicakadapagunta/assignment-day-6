//1.question
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
    new_string += numsArr[i]
}
console.log(new_string);

//2.question
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = " ";

for (var i = 0; i < 11; i++) {
    new_string += numsArr[i] + ","
}
console.log(new_string);

//3.question
var new_string = " ";
let numsArr = []
for (var i = 11; i > 0; i--) {

    new_string += numsArr[i]

}
console.log(new_string);

//4.question
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var even;
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 != 0) {
        console.log(numsArr[i], "even,")
    }

}
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var even;

//5.question
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 === 0) {
        console.log(numsArr[i], "even");
    }
}

//6.question
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1 = 0;
for (var i = 0; i <= 10; i++) {


    sum1 += numsArr[i];
}
console.log(sum1)

//7.question
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 === 0) {
        sum += numsArr[i]
    }
}
console.log(sum)

//8.question
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 === 0) {
        sum += numsArr[i]

    }
    else {
        sum -= numsArr[i]
    }

}
console.log(sum);

//9.question
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]]
// var numsArr1=[6, 7, 8, 9, 10, 11]
for (var i = 0; i < numsArr.length; i++) {
    console.log(numsArr[i])
}

//10.question
var numsArr = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]];

for (var i = 0; i < numsArr.length; i++) {

    let con = numsArr[i]

    console.log(con.join(''))
}

