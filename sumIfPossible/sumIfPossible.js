// Create a function called sumIfPossible.
// This function should take an array as input, and sum the values together if possible.
// If the variables are not the correct data type, skip over it, but keep track of how many skips have occurred

"use strict";

const arr = [12, 43, 73, 2, 98, 4, -4, 56];
// const arr1 = ["number", 234, 34, "string", -9];
// const arr2 = [true, false, null, 0, "", {}];

// Write function here

function sumIfPossible(array) {
    const result = { sum: 0, skip: 0 }
    return array.reduce((result, current) => {
        if (typeof current !== 'number') {
            result.skip += 1;
        }
        else{
            result.sum += current;
        }
        return result;
    }, result);
}

console.log(sumIfPossible(arr));
// {sum: 284, skip: 0}

// console.log(sumIfPossible(arr1));
// {sum: 259, skip: 2}

// console.log(sumIfPossible(arr2));
// {sum: 0, skip: 5}