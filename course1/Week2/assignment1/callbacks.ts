type printType = (data:string) => void;

function printHello(print: printType){
    print("Hello from callback!")
}

function print(message: string){
    console.log(message);
}

printHello(print)