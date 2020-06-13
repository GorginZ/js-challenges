function clamp(value, min, max){

    if (value < min) {
        result = min
      } else if (value > max) {
          result = max
      } else {
          result = value
      }
      return result
    // Your code here!
};
console.log(clamp(5,1, 4));
// Don't change me!
module.exports = clamp;