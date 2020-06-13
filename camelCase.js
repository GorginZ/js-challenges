
// function toCamelCase(str) { 
// //code in here upate
// let re = new RegExp('_|-','g');
// camel = str.replace(re, "");
// camel = str.replace(/_/g, "").replace(/-/g,"");
// console.log(camel)
//    return camel
// } 
// console.log(toCamelCase("hello_World_Its_Me_Very_long-word-string"));
// //this is here to run the tests
// module.exports = {toCamelCase};


//Kuan's solution
// function toCamelCase(str) { 
//     //code in here upate
//         kebab = '_'
//         dash = '-'
//         str = str.split('')
    
//         for (let i = 0; i < str.length; i++ ) {
//             if (str[i] === kebab || str[i] === dash) {
//                 str.splice(i, 1)
//                 str[i] = str[i].toUpperCase()
//             }
//             else {
//                 continue
//             }
//         }
//         return str.join('')
//     }
//     console.log(toCamelCase("hello-this_is_a-string"));


function toCamelCase(str) { 
    //code in here upate
    
    let newStr = str.replace(/_/g," ").replace(/-/g," ");
    let arr = newStr.split(" ");
    let first = arr[0]
    arr.shift()
    arrUpper = []
    arr.forEach(i => {
        arrUpper.push(i.charAt(0).toUpperCase()+i.slice(1))
        });
    arrUpper.unshift(first) 
    return arrUpper.join("")
    }
    
    //this is here to run the tests
    module.exports = {toCamelCase};
    
    toCamelCase("foo-bar")
// We used snake_case a lot in Ruby. But now we're living in a JavaScript world where the convention is to use camelCase. Write a function that converts any snake or kebab case string (aka dash/underscore delimited words) and converts it to camel case. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// e.g. 

// toCamelCase("foo_bar") // returns "fooBar" 

// toCamelCase("Hello-there") // returns "HelloThere"

// to CamelCase("") // returns "" 


// const snakeToCamel = (str) => str.replace(
//     /([-_][a-z])/g,
//     (group) => group.toUpperCase()
//                     .replace('-', '')
//                     .replace('_', '')
// );

// snakeToCamel('my-snake-string'); // mySnakeString

// snakeToCamel = str => str.replace(/([-_]\w)/g, g => g[1].toUpperCase())