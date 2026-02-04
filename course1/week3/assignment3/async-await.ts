//part 1:
function coinFlip () { 
    return new Promise((resolve, reject) => {
        let result: number = Math.random()
        if(result > 0.5){resolve("you win")}
        else{reject("you lose")}
    })
}

async function coinFlipResult(){
    try{
        const result = await coinFlip()
        console.log(result);
    }catch (error){
        console.log(error);
    }
}

// coinFlipResult()

type jokeResponse = {
    id: string,
    value: string
}

async function fetchJoke(){
    try{
        const result = await fetch("https://api.chucknorris.io/jokes/random")
        const data:jokeResponse = await result.json()
        console.log(data.value);
    }catch(error){
        console.log(error);
    }
}

fetchJoke()