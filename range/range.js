function range(start, end) {
    let myArr = []
   if (start > end) {
            for(let value = start; value >= end; value--) {
         myArr.push(value);
       }
       return myArr
   }
     for(let value = start; value <= end; value++) {
         myArr.push(value);
     }  
           return myArr    
   } 
   console.log(range(7,2))
   // function range(start, end) {

//     var i = start
//     let myArray = []
    
//     while (myArray[-1] < end ) {
//     for (var element in myArray) {
//     console.log(element)
//     i++}
//     return myArray
//     }
// }
// console.log(range(4,9))