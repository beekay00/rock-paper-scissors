function rockPaperScissors(){
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';
    let computerRandomNum = Math.floor(Math.random() * 3) + 1;
    let computerMove;

    let recursiveAsyncReadLine = function () {
        readline.question("Choose an option: ", (option) => {
          playerTurn = option;

          if(playerTurn == "r" || playerTurn == "rock"){
            playerTurn = rock;
            console.log('You chose rock !');
          }else if(playerTurn == "p" || playerTurn == "paper"){
            playerTurn = paper;
            console.log('You chose paper !');
          }else if(playerTurn == "s" || playerTurn == "scissors"){
            playerTurn = scissors;
            console.log('You chose scissors !');
          }else{
            console.log("Invalid Input. Try Again!");
            return readline.close();
          }

          switch(computerRandomNum){
            case 1:
                computerMove = rock;
            break;
            case 2:
                computerMove = paper;
            break;
            case 3:
                computerMove = scissors;
            break;
        }

        console.log(`The computer chose ${computerMove}.`);

        if ((playerTurn === rock && computerMove === scissors) || (playerTurn === paper && computerMove === rock) || (playerTurn === scissors && computerMove === paper)){
            console.log('You win!');
        }else if ((playerTurn === rock && computerMove === paper) || (playerTurn === paper && computerMove === scissors) || (playerTurn === scissors && computerMove === rock)){
            console.log('You lose!');
        }else{
            console.log('This game was a draw!');
        }
        });
    };
    recursiveAsyncReadLine();
}
rockPaperScissors();