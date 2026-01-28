type IDType = string | number

function printID(_ID:IDType){
    console.log(`Your ID is: ${_ID}`);
}

let id1: IDType = "thisIsAStringID"
let id2: IDType = 123

//printID(id1)
//printID(id2)

type fruit = "apple" | "banana" | "orange"

function youAte(what: fruit){
    console.log(`You ate an: ${what}`);
}

//youAte("apple")
//youAte("orange")

type resultType =  true | false

function printResult(_result: resultType){
    if(_result){
        console.log("pass");
        return;
    }
    console.log("fail");
}

printResult(true)
printResult(false)