function square(number){
    let result = number * number

    console.log(result);
}

square(3)

function profile(name, age, likesCoding){
    console.log(`Hi, I'm ${name}, I'm ${age} years old, ${likesCoding ? "I like coding" : "I don't like coding"}`);
}

profile("Viktor", 23, true)

function greetWTime(name, timeOfDay = "morning"){
    console.log(`Good ${timeOfDay}, ${name}`);
}

greetWTime("Viktor", "Day")
greetWTime("Viktor")