//Part 1:
var firstName = "Viktor"
var favNum = 17
var likeCoding = true
var bYear = 2002
const date = new Date()
var cYear = date.getFullYear()
var age = cYear - bYear
console.log(`Hi, my name is ${firstName}, my favorite number is ${favNum}, and it is ${likeCoding} that I like coding.`)
console.log(`I'm ${age} years old`) //since it does't calc by month and day it is the age i will be on 31/12

const foods = ["Rice", "bread👍", "granny smith"]

const student = {
    fName: firstName,
    lName: "Olausson",
    age: age,
    likesCoding: likeCoding,
    foodsArr: foods,
    get name(){
        return `${this.fName} ${this.lName}`
    },
    get foods(){
        return this.foodsArr.join(", ")
    }
}

const sentence = `My name is ${student.name}, I'm ${age} years old, some of my favorite foods are: ${student.foods} and ${student.likesCoding ? "I do like coding" : "i do not like coding"}`
console.log(sentence);
console.log(student)
console.log(student.name)