const playerSelection = prompt("Please enter an option").toLowerCase();
const computerSelection = computerPlay();

function computerPlay() {

    const computerOptions  = ["Rock","Paper","Scissors"];
    let randomOptions = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(randomOptions);
    return randomOptions;

}

function playRound(playerSelection,computerSelection) {
          
    
           let message = "";

    //If playerSelection is rock

    switch(playerSelection) {
        case "rock":
          if (computerSelection === "Rock") {
              message = "Is a tied!";
          } if (computerSelection === "Paper") {
              message = "You Loose! - Paper beats rock"; 
          } if (computerSelection === "Scissors") {
              message = "You Win! - Rock beats Scissors ";
          }
          break;
        case "paper":
            if (computerSelection === "Paper") {
                message = "Is a tied!";
            } if (computerSelection === "Scissors") {
                message = "You Loose! - Scissors beats Paper"; 
            } if (computerSelection === "Rock") {
                message = "You Win! - Paper beats rock ";
            }  
          break;
        case "scissors":
            if (computerSelection === "Scissors") {
                message = "Is a tied!";
            } if (computerSelection === "Rock") {
                message = "You Loose! - Rock beats Scissors"; 
            } if (computerSelection === "Paper") {
                message = "You Win! - Scissors beats Paper ";
            }  
            

            
    }

      return message;
}

function game() {
    let result = "";
    for (let i = 0; i < 5; i++) {
            result =  playRound(playerSelection,computerSelection);
        
    }
    console.log(result);
    return result;
    
}

