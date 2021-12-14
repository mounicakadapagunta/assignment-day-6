
//1.question
aa = (f, s, t) => {

    console.log(f, s, t);
    if (f > s && f > t) {
        console.log(f)
    }
    else if (s > f && s > t) {
        console.log(s)
    }
    else {
        console.log(t)
    }
}
aa(1, 2, 3);
//2.question
let n = [1, 2, 3];
console.log(add(n));
function add(n) {
    let sum = 10;
    for (var i = 0; i < n.length; i++) {
        sum += n[i]
    }
    return sum;
}

//3.question
(function () {
    const arr = [9, 8, 5, 6, 4, 3, 2, 1];
    let sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        sum += arr[i];

        console.log(sum);
    }
    return sum;

})();

//4.question
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
    for (var i = 0; i <= arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
}
ano();

//5.question
const newArray = [1, 3, 2, 5, 10, 13];
const myPrime = newArray.filter(num => {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return true;
        }
    }
    return false;
});
console.log(myPrime);

//6.question
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


sum = num.reduce((a, b) => a + b, 0)
console.log(sum);

//7.question
7.
    (function () {
        var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
        var k = 3;
        k = arr.length % k;
        const arr1 = {};
        out = arr.slice(k + 1, arr.length);
        var count = out.length;
        for (var i = 0; i < k + 1; i++) {
            out[count] = arr[i];
            count += 1;
        }
        console.log(out);
    })();

//8.question
var arr = ["guvi", "geek", "zen", "fullstack"];
(function () {
    for (var i = 0; i <= arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
})();

//9.question
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
})();


//10.question
(function () {
    var str = "abcd";
    str1 = str.split("").reverse().join("");
    console.log(str1);
})();

//11.question
var res = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var newArr = [];
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr)
}
res(["guvi", "geek", "guvi", "duplicate", "geeK"])

//12.question
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function (a, c) {
    if (a % 2 != 0) {
        return a + c;
    }
    return a;
});
console.log(s);


