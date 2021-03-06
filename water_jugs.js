function canMeasure(jugA, jugB, requiredAmount) {
    var a = jugA
    var b = jugB
    let res = false
    //Euclidean Algorithm to find greatest common factor
   while(a!=b){
   if (b>a)   {
    b = (b-a)
  }
   if (a>b) {
     a=(a-b)
    }
    }
  if (requiredAmount%a === 0) {
    res = true
  }
  //can't measure if requriedamount larger than both vessels
  if (requiredAmount> jugA && requiredAmount>jugB) {
    res = false
  }
  return res
  };
  console.log(canMeasure(3,5,4))
  
  // Dont change below here
  module.exports = {
    canMeasure,
  };

//   # Measuring With a Vengeance

// The leader of your village has asked you to journey into the mountains to acquire some holy water. You need to bring back exactly the right amount (`requiredAmount`). You are provided with two jugs (`jugA` and `jugB` these values are given) that you can take to the mountain spring. On the return journey, you can only carry back one jug, which should have the requested quantity of water. Since the journey into the mountain range is dangerous. You can only risk one trip, you do not want to make the journey if it is not possible to measure the correct amount of water. Find a way to calculate if the village leader's request is achievable.

// **INPUTS**
//   - `jugA` and `jugB` integers representing the volume of each jug.
//   - `requiredAmount` integer representing the volume of water to carry back.

// **OUTPUT**
//   - `true` or `false` depending on if one of the jugs (`jugA` or `jugB`) can be filled with the requested `requiredAmount`

// **EXAMPLE**

// [Best Example](https://www.youtube.com/watch?v=BVtQNK_ZUJg)

// `jugA = 3`, `jugB = 5` and `requiredAmount = 4`

// 1. Fill jugA and pour that into jugB. jugA contains 0 litres and jugB contains 3 litres.
// 2. Repeat Step 1. Now, jugB is full with 5 litres and jarA had 1 litre.
// 3. Empty jugB and pour the water from jugA into jugB. Now, jugA is empty and jugB has 1 litre.
// 4. Fill jugA and pour it into jugB to get 4 litres.

  
  
  