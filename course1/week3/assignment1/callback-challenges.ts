//i write the old way becuase thats what i like, it makes more sense to me becuase of my C# background
// Challenge 1
/*  Create a function addTwo that accepts one input and adds 2 to it. */

function addTwo(input: number){
    return input + 2
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
//console.log(addTwo(10));

// ________________________________________________________________________________________________
// Challenge 2
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/

function addS(input: string){
    return input + "s"
}
// uncomment these to check your work
//console.log(addS("pizza"));
//console.log(addS("bagel"));

// ________________________________________________________________________________________________
// Challenge 3
/* 
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/

type addTwoType = (input: number) => number

function map (inputArr: number[], callback: addTwoType){
    var newArr: number[] = []
    for(const value of inputArr){
        newArr.push(callback(value))
    }
    return newArr
}

//console.log(map([1, 2, 3], addTwo));

// ________________________________________________________________________________________________
// Challenge 4
/* 
The function forEach takes an array and a callback, and runs the callback on each element of the array. 
forEach does not return anything.
*/
let alphabet = "";
const letters = ["a", "b", "c", "d"];
letters.forEach(function(char) {
  alphabet += char;
});
//console.log(alphabet);

// should output abcd

// ________________________________________________________________________________________________
// Challenge 5
/* 
Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined. 
Call this new function mapWith.//console.log(mapWith([1, 2, 3], addTwo));
*/

function mapWith(inputArr: number[], callback: addTwoType){
    let outputArr: number[] = []
    inputArr.forEach((num) => {outputArr.push(callback(num))})
    return outputArr
}

//console.log(mapWith([1, 2, 3], addTwo)); 
//should output [ 3, 4, 5 ]

// ________________________________________________________________________________________________
// Challenge 6
/* 
The function reduce takes an array and reduces the elements to a single value. 
For example it can sum all the numbers, multiply them, 
or any operation that you can put into a function.
*/

const nums = [4, 1, 3];
function add (a:number, b:number) {
  return a + b;
};

type maths = (a: number, b: number) => number

function reduce(inputArr: number[], callback: maths){
    var result: number = 0

    inputArr.forEach((num) => {result = callback(num, result)})

    return result
}

//console.log(reduce(nums, add))

//should output 8

// ________________________________________________________________________________________________
// Challenge 7
/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!*/

// function intersection(array1: number[], array2: number[], array3: number[], /*...rest: number[][]*/){
//     var result: number[] = array1.filter((num) => array2.includes(num) && array3.includes(num))

//     return result
// }

function intersection(arr: number[], ...rest: number[][]){
    return arr.filter(num => rest.every(arr => arr.includes(num)))
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

// Challenge 8
/* 
Construct a function union that compares input arrays and returns a new array that contains all elements. 
If there are duplicate elements, only add it once to the new array. 
Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/

function union(arr1: number[], arr2: number[], arr3:number[]){
    var result: number[] = arr1.concat(arr2, arr3)
    return result.filter((item, index) => result.indexOf(item) == index)

    // return [...new Set([...arr1, ...arr2, ...arr3])];
}

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// ________________________________________________________________________________________________
// Challenge 9
/* 
Construct a function objOfMatches that accepts two arrays and a callback. 
objOfMatches will build an object and return it. 
To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. 
If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
*/

//

type strs = (string:string) => string

function objOfMatches(arr1: string[], arr2: string[], callback:strs){

    const matches:{[key:string]: string} = {}
    for(let i = 0; i < arr1.length && i < arr2.length; i++){
        const key = arr1[i]!
        const value = arr2[i]
        if(callback(key) === value){
            matches[key] = value
        }
    }
    return matches
}

// console.log(
//   objOfMatches(
//     ["hi", "howdy", "bye", "later", "hello"],
//     ["HI", "Howdy", "BYE", "LATER", "hello"],
//     function (str) {
//       return str.toUpperCase();
//     }
//   )
// );

// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// ________________________________________________________________________________________________
// Challenge 10
/* 
Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. 
multiMap will return an object whose keys match the elements in the array of values. 
The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
*/

type fnctType = (string:string) => string

function multiMap(strArr: string[], functArr: fnctType[]){
    const objs:{[key:string]: string[]} = {}

    for(let i = 0; i < strArr.length; i++){
        const key:string = strArr[i]!
        const value:string[] = []
        for(let j = 0; j < functArr.length; j++){
            value.push(functArr[j]!(key))
        }
        objs[key] = value
    }
    return objs
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str:string) {
        return str.toUpperCase();
      },
      function (str:string) {
        return str.toUpperCase().slice(0,1) + str.slice(1).toLocaleLowerCase()
      },
      function (str:string) {
        return str + str;
      },
    ]
  )
);

// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// ________________________________________________________________________________________________
// Challenge 11
/* 
Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. 
objectFilter will return a new object. 
The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.
*/

type challenge11Type = (city:string) => string

function objectFilter<T>(_obj:T, callback:challenge11Type){
    const obj:Partial<T> = {}

    for(const key in _obj){
        const value = _obj[key]
        if(callback(key) === value){
            obj[key] = value
        }
    }

    return obj
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));

// Should log { London: 'LONDON', Paris: 'PARIS'}