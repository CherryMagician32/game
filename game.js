function computerPlay() {

    const computerOptions  = ["Rock","Paper","Scissors"];
    let randomOptions = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return randomOptions; //retorno la opción elegida por la computadora

}

function playRound(playerSelection,computerSelection) {
          
    
           let message = "";
           let result = "";

    //If playerSelection is rock

    switch(playerSelection) {
        case "rock":
          if (computerSelection === "Rock") {
              message = "Is a tied!";
              result = "tied";
          } if (computerSelection === "Paper") {
              message = "You Loose! - Paper beats rock"; 
              result = "loose";
          } if (computerSelection === "Scissors") {
              message = "You Win! - Rock beats Scissors ";
              result = "win";
          }
          break;
        case "paper":
            if (computerSelection === "Paper") {
                message = "Is a tied!";
                result = "tied";
            } if (computerSelection === "Scissors") {
                message = "You Loose! - Scissors beats Paper"; 
                result = "loose";
            } if (computerSelection === "Rock") {
                message = "You Win! - Paper beats rock ";
                result = "win";
            }  
          break;
        case "scissors":
            if (computerSelection === "Scissors") {
                message = "Is a tied!";
                result = "tied";
            } if (computerSelection === "Rock") {
                message = "You Loose! - Rock beats Scissors"; 
                result = "loose";
            } if (computerSelection === "Paper") {
                message = "You Win! - Scissors beats Paper ";
                result = "win";
            }  
            

            
    }

        
      return result; //retorno quién es el ganador desde el pto de vista del usuario
}

function game() {

    //contadores para llevar el puntaje de computadora y jugador, se inicializan en cero y se les va sumando o no algún puntaje
    let playerSelection = prompt("Please enter an option").toLowerCase();
    let computerSelection = computerPlay();
    let computerScore = 0;
    let playerScore = 0;
    let winnerMessage = "";
    for (let i = 0; i < 5; i++) {
        
        let finalResult = playRound(playerSelection,computerSelection);

        //si el resultado es igual win entonces se debe asignar un punto al jugador
        if (finalResult ==="win") {
                playerScore = playerScore + 1;

        }else if (finalResult ==="loose") {

                computerScore = computerScore + 1;
        }else{
              
            computerScore = computerScore + 1;
            playerScore = playerScore + 1;
        }
    }
            if (computerScore > playerScore) {

                    winnerMessage = "You Loose";

            }else if (playerScore > computerScore) {

                    winnerMessage = "You Win";
            }else{
                    winnerMessage = "Tied!";
            }
    
    
}

