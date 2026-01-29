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

//printResult(true)
//printResult(false)

interface book{
    title: string,
    pages: number
}

function describeBook(book:book){
    console.log(`The book ${book.title} and has ${book.pages} number of pages`);
}

const book: book= {title: "harry potter and the philosopher's stone", pages: 223}

describeBook(book)

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

printInfo(englishTeacher)