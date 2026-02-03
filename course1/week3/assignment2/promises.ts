//part 1:
const coinFlip:Promise<string> = new Promise((resolve, reject) => {
    let result: number = Math.random()
    if(result > 0.5){resolve("you win")}
    else{reject("you lose")}
})

coinFlip.then((value) => {console.log(value);}).catch((error) => {console.log(error);})