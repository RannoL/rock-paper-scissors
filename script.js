const inputs = document.getElementsByTagName('img');

for (i= 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', e => {
    console.log(e.target.id);
  })
}

function playerSelection(){
  let playerSelection = prompt("Make your choice! Rock, Paper or Scissors?").toLowerCase()
  if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
    return playerSelection
  }else{
    alert("Invalid choice!")
  }
}

function computerSelection(){
  let selection = ["rock", "paper", "scissors"]
  let randomSelection = selection[Math.floor(Math.random() * selection.length)]
  return randomSelection
}
    
function playerWins(playerSelection, computerSelection){
  return(`Player draws: ${playerSelection}\nComputer draws: ${computerSelection}\nYou win!`);
}

function draw(playerSelection, computerSelection){
  return(`Player draws: ${playerSelection}\nComputer draws: ${computerSelection}\nIt's a draw!`)
}

function computerWins(playerSelection, computerSelection){
  return(`Player draws: ${playerSelection}\nComputer draws: ${computerSelection}\nComputer wins.`);
}

function playRound(playerSelection, computerSelection){
  if (playerSelection == undefined){
    return(`Game canceled.`);
  }else if (playerSelection == computerSelection){
    return draw(playerSelection, computerSelection);
  }else if(playerSelection == "rock" && computerSelection == "scissors"){
    return playerWins(playerSelection, computerSelection);
  }else if (playerSelection == "paper" && computerSelection == "rock"){
    return playerWins(playerSelection, computerSelection);
  }else if(playerSelection == "scissors" && computerSelection == "paper"){
    return playerWins(playerSelection, computerSelection);
  }else{
    return computerWins(playerSelection, computerSelection);
  }
}

function playGame(){
  let i = 0; 
  let playerWins = 0;
  let computerWins = 0;
  let draws = 0;

  while (i < 5){
    let result = playRound(playerSelection(), computerSelection());
    console.log(result)
    if (result.includes("You win!")){
      playerWins++;
    }else if (result.includes("Computer wins.")){
      computerWins++;
    }else if (result.includes("It's a draw!")){
      draws++
    }
    i++; 
  }

  if (playerWins > computerWins){
    return (`You win!\nFinal results: Player wins: ${playerWins}\nDraws: ${draws}\nComputer wins: ${computerWins}`)
  }else if(playerWins == computerWins){
    return (`It's a draw!\nFinal results: Player wins: ${playerWins}\nDraws: ${draws}\nComputer wins: ${computerWins}`)
  }else{
    return (`Computer wins.\nFinal results: Player wins: ${playerWins}\nDraws: ${draws}\nComputer wins: ${computerWins}`)
  } 
}

