type printStringType = (data:string) => void;

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

function calcNPrint(a:number, b:number, print:printResultType){
    const sum:number = a + b
    
    print(sum)
}

function printResult(result:number){
    console.log("this is the result: ", result);
}

calcNPrint(2, 3, printResult)