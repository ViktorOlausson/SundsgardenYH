function calc(a,b,op){
    var res

    switch (op.toLowerCase()){
        case "add":
            res = a + b
            break;
        case "subtract":
            res = a - b
            break;
        case "multiply":
            res = a * b
            break;
        case "divide":
            res = a / b
            break;
    }
    
    console.log(res);
}

calc(33,2,"multiply")
calc(33,2,"Add")
calc(33,2,"subtract")
calc(33,2,"divide")

const square = (a) => console.log(a * a)

square(2)

function isAdult(age){
    if(age >= 18){
        return true
    }else{
        return false
    }
}

function profile(name, age, likesCoding){
    console.log(`Hi, I'm ${name}, I'm ${age} years old, ${likesCoding ? "I like coding" : "I don't like coding"}`);
    console.log(`Viktor is ${isAdult(age) ? "an adult": "not an adult"}`);
}

profile("Viktor", 23, true)