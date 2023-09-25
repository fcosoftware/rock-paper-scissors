const result = document.querySelector('.result')

const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanPoint = 0
let machinePoint = 0

/** tipos de variaveis
 * 
   humanPoint   -> Camel Case
   GAME_OPTIONS -> Snake Case  

*/

//ENUMS
const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

    const randowNumber = Math.floor(Math.random() * 3)

    return choices[randowNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Rodada Empatada !" + " &#x1F62C;"
    } else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS)) {
        humanPoint++
        humanScore.innerHTML = humanPoint 
        result.innerHTML = "Você Ganhou ! " + " &#x1F61C;" 
    } else {
        machinePoint++
        machineScore.innerHTML = machinePoint
        result.innerHTML = "A Alexa Ganhou ! " + " &#x1F621;"
    }
}