//*****Always Hungry*****
/* Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.*/

console.log("*****Always Hungry*****");

function alwaysHungry(arr){

    var foodCtr=0;

    for(var i=0; i<arr.length; i++){

        if(arr[i] === "food"){
            console.log("yummy");
            foodCtr++;
        }

    }

    if(foodCtr === 0){
        console.log("I'm hungry");
    }

}
console.log("-----------------------------------------");
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
console.log("-----------------------------------------");
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
console.log("-----------------------------------------");

//*****High Pass Filter*****
/* Given an array and a value cutoff, return a new array containing only the values larger than cutoff.*/

console.log("*****High Pass Filter*****");

function highPass(arr, cutoff) {
    var filteredArr = [];
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

console.log("-----------------------------------------");

//*****Better Than Average*****
/* Given an array of numbers return a count of how many of the numbers are larger than the average. */

console.log("*****Better Than Average*****");

function betterThanAverage(arr) {
    // calculate the average
    var sum = 0;
    var average = 0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    average = sum / arr.length;

    // count how many values are greater than the average
    var count = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i] > average){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

console.log("-----------------------------------------");

//*****Array Reverse*****
/* Write a function that will reverse the values of an array and return them*/
console.log("*****Array Reverse*****");

function reverse(arr) {
    var reversedArr = [];
    for(var i=arr.length-1; i>=0; i--){
        reversedArr.push(arr[i]);
    }
    for(var i=0; i<arr.length; i++){
        arr[i] = reversedArr[i];
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
console.log("-----------------------------------------");

//*****Array Reverse - Alternative Solution*****
/* Write a function that will reverse the values of an array and return them*/

console.log("*****Array Reverse - Alternative Solution*****");

function arrReverse(arr){
    for(var i=0; i < arr.length/2; i++){
        let temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

var result = arrReverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
result = arrReverse([1, 2, 3, 4, 5]);
console.log(result); // we expect back [5, 4, 3, 2, 1]
console.log("-----------------------------------------");

//*****Fibonacci Array*****
/* Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.*/

console.log("*****Fibonacci Array*****");

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i=1; i<n-1; i++)
    {
        fibArr.push(fibArr[i-1]+fibArr[i]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
