type printStringType = (data?:string) => void;

//nr 1
function printHello(print: printStringType){
    print("Hello from callback!")
}

//nr2

function printLateHello(print: printStringType){
    setTimeout(() => {
        print("Hi, I am late!")
    }, 2000);
}

function print(message: string){
    console.log(message);
}

//printHello(print)
//printLateHello(print)

type printResultType = (result: number) => void;

//nr 3
function calcNPrint(a:number, b:number, print:printResultType){
    const sum:number = a + b
    
    print(sum)
}

function printResult(result:number){
    console.log("this is the result: ", result);
}

//calcNPrint(2, 3, printResult)

//nr 4
type returnStringType = (data:string) => string;

function transformText2000(text:string, callbackToUpperCase: returnStringType){
    console.log(text);
    const transeformedtext = callbackToUpperCase(text) 
    console.log(transeformedtext);
}

function callbackToUpperCase(input: string){
    return(input.toUpperCase()); 
}

// transformText2000("this text will be transformed", callbackToUpperCase)

//nr 5

function orderPizza(printPizzaReady: printStringType){
    console.log("ordering pizza...");

    setTimeout(() => {
        printPizzaReady()
    }, 3000)
}

function printPizzaReady(){
    console.log("pizza is ready");
}

//orderPizza(printPizzaReady)

//nr 6
type nr6Type = (text: string) => void

function call3Times(printNr6: nr6Type){
    const strings:string[] = ["message 1", "message 2", "message 3"]
    strings.forEach((a: string) => printNr6(a))
}

function printNr6(text: string){
    console.log(text);
}

//call3Times(printNr6)

//nr7

function startDownload(urlString:string, downloadComplete: nr6Type){
    console.log("Starting download from: ", urlString);

    setTimeout(() => {
        downloadComplete(urlString)
    }, 2000)
}

function downloadComplete(url: string){
    console.log("download completed from: ", url);
}

//startDownload("https://www.starstable.com/instruction.txt", downloadComplete)

//nr8

type nr8Type = () => void

function printRandom(error: nr8Type, success: nr8Type){
    const random: number = Math.floor(Math.random() * 1000000)
    console.log(random);
    if(random % 2 == 0){
        success()
    }else{
    error()
    }
}

function successMessage(){
    console.log("success");
}

function errorMessage(){
    console.log("error");
}

printRandom(errorMessage, successMessage)