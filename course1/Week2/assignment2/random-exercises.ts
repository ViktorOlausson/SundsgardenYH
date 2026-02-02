//1.1
type IDType = string | number

function printID(_ID:IDType){
    console.log(`Your ID is: ${_ID}`);
}

let id1: IDType = "thisIsAStringID"
let id2: IDType = 123

//printID(id1)
//printID(id2)

//1.2
type fruit = "apple" | "banana" | "orange"

function youAte(what: fruit){
    console.log(`You ate an: ${what}`);
}

//youAte("apple")
//youAte("orange")

//1.3
type resultType =  true | false

function printResult(_result: resultType){
    if(_result){
        console.log("pass");
        return; 
    }
    console.log("fail");
}

//printResult(true)
//printResult(false)

//2.1
interface book{
    title: string,
    pages: number
}

function describeBook(book:book){
    console.log(`The book ${book.title} and has ${book.pages} number of pages`);
}

const book: book= {title: "harry potter and the philosopher's stone", pages: 223}

// describeBook(book)

// 2.2
interface teacher{name:string, subject:string}
interface employee{id:number, email:string}
type schoolTeacher = teacher & employee

function printInfo(t: schoolTeacher){
    console.log(`Name: ${t.name}, subject: ${t.subject}, email: ${t.email}, id: ${t.id}`);
}

const englishTeacher: schoolTeacher = {
    name: "Peter Pan",
    subject: "english",
    email: "peter.pan@skolan.se",
    id: 1
}

// printInfo(englishTeacher)

//2.3
interface car {brand: string, year: number}

function printCar(c:car){
    console.log(`Brand: ${c.brand}, year: ${c.year}`);
}

const volvo:car = {brand: "Volvo", year: 2025}

//printCar(volvo)

//3.1
enum color{
    red = "red",
    green = "green",
    blue = "blue"
}

function printColor(c:color){
    console.log(`you chose: ${c}`);
}

//printColor(color.green)

//3.2

enum pizzaSize{
    small = "small",
    medium = "medium",
    large = "large"
}

function printPizzaSize(size: pizzaSize){
    console.log(`you choose a ${size} pizza`);
}

//printPizzaSize(pizzaSize.medium)

//3.3
enum role{
    admin,
    user,
    guest
}

function printRole(r:role){
    switch (r){
        case 0:
            console.log("you have full access");
            break;
        case 1:
            console.log("you have limited access");
            break
        case 2:
            console.log("you have guest access");
            break
    }
}

// printRole(role.admin)
// printRole(role.user)
// printRole(role.guest)

//4.1
function wrapInArray<T>(input:T): T[]{
    return [input]
}

//console.log(wrapInArray("cat"));

//4.2

function firstItem<T>(input:T[]){
    return input[0]
}

const array1: number[] = [1,2,3]
const array2: string[] = ["a","b", "c"]

//console.log(firstItem(array1))
//console.log(firstItem(array2));

//4.3

function reverseArray<T>(input: T[]): T[]{
    return input.reverse()
}

const array3: string[] = ["Hello", "World"]

console.log(reverseArray(array3));