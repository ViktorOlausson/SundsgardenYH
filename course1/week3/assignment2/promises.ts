//part 1:
function coinFlip () { 
    return new Promise((resolve, reject) => {
        let result: number = Math.random()
        if(result > 0.5){resolve("you win")}
        else{reject("you lose")}
    })
}


coinFlip().then((value) => {console.log(value);}).catch((error) => {console.log(error);});

type jokeResponse = {
    id: string,
    value: string
}

function fetchJoke(){
    const promise: Promise<void> = fetch("https://api.chucknorris.io/jokes/random").then((response:Response) => {
        if(!response.ok){
            throw new Error("faiiiiiil")
        }
        return response.json() as Promise<jokeResponse>
    }
    ).then((data) => {
        const joke: string = data.value
        console.log(joke);
    }).catch((error) => {
        console.log(error);
    })
}

fetchJoke()