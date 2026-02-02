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

console.log(map([1, 2, 3], addTwo));
