// harrison will show you how to run the tests and also what lodash is
// https://www.npmjs.com/browse/depended


/*
Is Match
Tells you if the keys and values in properties are contained in object.
Example:

=> true
*/

const isMatch = (objOne, objTwo) => {
for (let key in objOne) {
  if (objTwo.hasOwnProperty(key)) {
    if (objOne[key] === objTwo[key]) {
      return true
    }
   }
 }
 return false
}

const stooge = {name: 'moe', age: 32};
isMatch(stooge, {age: 32});

module.exports = isMatch