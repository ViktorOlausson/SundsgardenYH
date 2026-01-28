type IDType = string | number

function printID(_ID:IDType){
    console.log(`Your ID is: ${_ID}`);
}

let id1: IDType = "thisIsAStringID"
let id2: IDType = 123

printID(id1)
printID(id2)