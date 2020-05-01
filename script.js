const inputs = document.getElementsByTagName('img');
let playerSelection = null;

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

/* let p = new Promise((resolve,reject) => {
  let playerSelection = playerSelection();
  if (playerSelection !== null){
    resolve(`${playerSelection}`);
}
})

p.then((message) => {
  playRound(message, computerSelection());
})


function playRound(playerSelection, computerSelection){
  
  //check if user has made their choice
  let p = new Promise((resolve,reject) => {
    if (playerSelection !== null){
      resolve()
    }else{
      reject()
    }
  })

  p.then(() => {
    if (playerSelection == computerSelection) {
      console.log(draw(playerSelection, computerSelection));  
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
      console.log (playerWins(playerSelection, computerSelection));
    }else if (playerSelection == "paper" && computerSelection == "rock"){
      console.log (playerWins(playerSelection, computerSelection));
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
      console.log (playerWins(playerSelection, computerSelection));
    }else{
      console.log (computerWins(playerSelection, computerSelection));
    }
  })

} */
/* 
function playRound (computerSelection, playerSelection){

  const inputs = document.getElementsByTagName('img');
  for (i= 0; i < inputs.length; i++){
    inputs[i].addEventListener('click', e => {
    playerSelection = (e.target.id);
  })
}
  if (!playerSelection) return;
  
  return (playerSelection);
  return (computerSelection);
}   */


//Add evenetListener - Game starts when click is made
for (i= 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', e => {
  playerSelection = (e.target.id);
  playRound(playerSelection, computerSelection())
  })
}

function playRound(playerSelection, computerSelection){
  console.log(`player: ${playerSelection}`);
  console.log(`computer: ${computerSelection}`);

  if (playerSelection == computerSelection) {
    console.log(draw(playerSelection, computerSelection));  
  }else if(playerSelection == "rock" && computerSelection == "scissors"){
    console.log (playerWins(playerSelection, computerSelection));
  }else if (playerSelection == "paper" && computerSelection == "rock"){
    console.log (playerWins(playerSelection, computerSelection));
  }else if(playerSelection == "scissors" && computerSelection == "paper"){
    console.log (playerWins(playerSelection, computerSelection));
  }else{
    console.log (computerWins(playerSelection, computerSelection));
  }
}
