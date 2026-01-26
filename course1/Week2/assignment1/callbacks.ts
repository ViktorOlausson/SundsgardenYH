type printType = (data:string) => void;

//nr 1
function printHello(print: printType){
    print("Hello from callback!")
}

//nr2

function printLateHello(print: printType){
    setTimeout(() => {
        print("Hi, I am late!")
    }, 2000);
}

function print(message: string){
    console.log(message);
}

//printHello(print)
printLateHello(print)
