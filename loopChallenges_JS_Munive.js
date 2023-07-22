// *****Print odd numbers 1-20*****

console.log("*****Print odds 1 to 20*****");

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

//*****Decreasing multiples of 3*****
/* Print all of the values that are evenly divisible by 3 from 100 down to 0*/

console.log("*****Decreasing multiples of 3*****");
for (var i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//*****Print the sequence 4, 2.5, 1, -0.5, -2, -3.5*****

console.log("//*****Print the sequence 4, 2.5, 1, -0.5, -2, -3.5*****");

for (var i = 4; i >= -3.5; i = i - 1.5) {
    console.log(i);
}

//*****Sigma*****

console.log("*****Sigma*****");
/* Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end. */

function sumRangeOfNums(beginNum, endNum) {
    var sum = 0;
    for (var i = beginNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
}

var sum = sumRangeOfNums(1, 100);

console.log(`The sum of 1 to 100 is ${sum}`);

//*****Factorial*****
/* Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end. */

console.log("*****Factorial*****");

function multiplyRangeOfNums(beginNum, endNum) {
    var product = 1;
    for (var i = beginNum; i <= endNum; i++) {
        product *= i;
    }
    return product;
}

var product = multiplyRangeOfNums(1, 12);
console.log(`The product of 1 to 12 is ${product}`);
