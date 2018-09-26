//Returns an array with all the numbers from 1 to 255
function getMyArray() {
    firstArray = [];
    for(var i = 1; i < 256; i++) {
        firstArray.push(i);
    }
    return firstArray;
}


//Get the sum of all even numbers from 1 to 1000
function getSumEvenNumbers() {
    var mySum = 0;
    for(var i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            mySum += i;
        }
    }
    return mySum;
}


//Returns the sum of all the odd numbers from 1 to 5000 
function getSumOddNumbers() {
    var mySum = 0;
    for(var i = 1; i < 5001; i++){
        if (i % 2 == 1) {
            mySum += i;
        }
    }
    return mySum;
}

//Returns the sum of all the values within the array
function runThroughArray(arr) {
    var mySum = 0;
    for(var i = 0; i < arr.length; i++) {
        mySum = mySum + arr[i];
    }
    return mySum;
}

//Return the maximum number in an array
function findMyMax(arr) {
    var myMax = arr[0];

    for(var i = 0; i < arr.length; i++){
        if (myMax < arr[i]) {
            myMax = arr[i];
        }
    }
    return myMax;
}

//Returns the average of the values in the array
function findMyAvg() {
    var mySum = 0;

    for (var i = 0; i < arr.length; i++) {
        mySum = mySum + arr[i];
    }
    return mySum / arr.length;
}

//Return an array of all the odd numbers betweeen 1 to 50
function findMyOddNums() {
    var myArr = []

    for(var i = 1; i < 50; i++) {
        if (myArr[i] % 2 != 0) {
            myArr.push(i)
        }
    }
    return myArr;
}

//Given the value of Y, takes an array and returns the number of values that are greater than Y
function findGreaterThanY(arr, Y) {
    var myCount = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            myCount++;
        }
    }
    return myCount;
}

//Given an array with multiple values, replaces each value in the array with the product of the original value squared by itself
function findMySquares(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

//Given an array with multiple values, replaces any negative numbers within the array with the value of 0.
function findMyNoNeg(arr) {

    for(var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

//Given an array with multiple values, returns a new array that only contains the maximum, minimum, and average values of the original array
function myMaxMinAvg() {
    var myMax = arr[0];
    var myMin = arr[0];
    var mySum = arr[0];

    for(var i = 0; i < arr.length; i++){
        if (arr[0] > myMax) {
            myMax = arr[0];
        }
        if (arr[0] < myMin) {
            myMin = arr[0];
        }

    mySum = mySum + arr[i];
    }
    
    var myAvg = mySum / arr.length;
    var myArrNew = [myMax, myMin, myAvg];
    return myArrNew;
}

//Swaps the first and last vaules of any given array
function mySwap(arr) {
    var myTempVal = arr[0];

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = myTempVal;
    return arr;
}

//Takes an array of numbers and replaces any negative values within the array with the string 'Dojo'
function myNumToStr(arr) {

    for(var i = 0; i < arr.length; i++) {
        if (arr[0] < 0){
            arr[i] = 'Dojo';
        }

    }
    return arr;
}