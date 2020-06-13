// function cowCount(years) {
//   // Your code here;
// }
// // 4th yea of life 1 new calf
// // cows ++ X number of cows that are age => 4
// // if cow age =>4 
// module.exports = {
//   cowCount,
// };

// First cow offspring:

// 1 + 2 + 3 + 4 + 5 ...
// year 0 -- 0
// year 1 -- 0
// ...

function firstcowsbaby(years){
    let berthaBabies = years -2;
    let gen = berthaBabies - 3;
    let sum = berthaBabies + gen;
     while (gen >= 0){
       sum = sum + gen;
       console.log("sum is " + sum);
       console.log("gen is " + gen);
    
        gen = gen - 1;
        console.log("gen is " + gen);
     }
     return sum
    }
    console.log(firstcowsbaby(10));

//     # Narayana's Ranch
// Narayana has just moved into his new farm and wants to plan for how much space he will need. Narayana currently has a single calf called Bertha, and she will have a calf every year, starting from her fourth year of life. All of Bertha's children will do the same. Narayana wanto you to find out how many cows he will have at the end of a given year. Note that these cows are a special breed that won't die from old age, and none of the offspring will be bulls. See if you can find a solution to his problem.

// **INPUT**
//   - `n` An integer representing the number of years.

// **OUTPUT**
//   - `integer` representing the total number of cows.

// **EXAMPLE**

// [A musical interpretation](https://soundcloud.com/splinterreeds/tom-johnson-narayanas-cows)


// ```
// --------------------------------------
// | Years | 0 | 1 | 2 | 3 | 4 | 7 | 10 |
// | Cows  | 1 | 1 | 1 | 2 | 3 | 9 | 28 |
// --------------------------------------
// ```
// Note that we start counting from year 0, and all cows will live for `n` years.