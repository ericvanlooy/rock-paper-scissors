
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; /*Create an Array with the 3 possible choices*/
    let randomChoice = Math.floor(Math.random() * choices.length); /*Randomly choose a value to get one of the index values 0, 1 or 2*/
    return choices[randomChoice]; /*store the array value that match the randomly chosen index value*/
}

function playRound(playerSelection,computerSelection){
    playerSelection = prompt("Type rock, paper, or scissors", ""); /*get a string value that is either rock, paper, or scissors */
    computerSelection = getComputerChoice(); /*get the string value returned from the getComputerChoice() function */

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" || playerSelection.toLowerCase() === "scissors" && computerSelection === "paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "rock") { /*toLowerCase helps to match any capitalised input with lowercase rock, paper, or scissors, then we check if any of the 3 player selections beat the computer selection */
        alert(`You win, ${playerSelection} beats ${computerSelection}`); /* announce the win*/
    } else if (playerSelection.toLowerCase() === computerSelection) { /*We check if any of the 3 player selections are the same as the computer selection */
        alert("It is a draw!"); /* announce the draw*/
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper" || playerSelection.toLowerCase() === "scissors" && computerSelection === "rock" || playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") { /*We check if any of the 3 player selections are beaten by the computer selection */
        alert(`You lose, ${computerSelection} beats ${playerSelection}`); /* announce the loss*/
    } else { /*Scenario if the player selection is not any of the above - due to wrong input*/
        alert(`That was not the right input, you chose ${playerSelection}`); /* announce the wrong input*/

    }

}
playRound();