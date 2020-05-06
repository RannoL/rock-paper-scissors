const inputs = document.querySelectorAll('.rockPaperScissors');
const playerHand = document.querySelector('.playerPic');
const computerHand = document.querySelector('.computerPic');
const roundText = document.querySelector('#roundCount');
const winText = document.querySelector('#winCount');
const loseText = document.querySelector('#lossCount');
const drawText = document.querySelector('#drawCount');
const playAgain = document.querySelector('#playAgain');
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('.button')
let rounds = 0;
let wins = 0;
let losses = 0;
let draws = 0;

function computerSelection(){
  let selection = ["rock", "paper", "scissors"]
  let randomSelection = selection[Math.floor(Math.random() * selection.length)]
  return randomSelection
}
    
function playerWins(playerSelection, computerSelection,){
  wins++;
  winText.textContent = `Wins: ${wins}`;
  winText.classList.toggle('win');
  if (wins == 5){
    winText.classList.toggle('win');
    wonGame()
  }
}

function draw(playerSelection, computerSelection){
  draws++;
  drawText.textContent= `Draws: ${draws}`;
  drawText.classList.toggle('draw');
}

function computerWins(playerSelection, computerSelection){
  losses++;
  loseText.textContent= `Losses: ${losses}`;
  loseText.classList.toggle('lose');
  if (losses == 5) {
    loseText.classList.toggle('lose');
    lostGame()
  }
}

function wonGame() {
  const boxes = document.querySelectorAll('.pinkBox')
  playAgain.textContent = 'New game';
  result.textContent= 'You won!'
  playAgain.classList.toggle('pinkBox');
  playAgain.classList.toggle('playAgain');
  playAgain.setAttribute('onClick', 'newGame()')
 

  for (i=0; i< boxes.length; i++){
    boxes[i].classList.toggle('win');
  }
  for (j=0; j< buttons.length; j++){
    buttons[j].disabled = true;
    buttons[j].classList.toggle('endGame');
  }
}

function lostGame() {
  const boxes = document.querySelectorAll('.pinkBox')
  playAgain.textContent = 'New game';
  result.textContent= 'You Lost.'
  playAgain.classList.toggle('pinkBox');
  playAgain.classList.toggle('playAgain');
  playAgain.setAttribute('onClick', 'newGame()')

  for (i=0; i< boxes.length; i++){
    boxes[i].classList.toggle('lose');
  }
  for (j=0; j< buttons.length; j++){
    buttons[j].disabled = true;
    buttons[j].classList.toggle('endGame');
  }
}

function newGame () {
  location.reload();
}

function playRound(playerSelection, computerSelection){
    rounds++;
    winText.classList.remove('win');
    loseText.classList.remove('lose');
    drawText.classList.remove('draw');
    playerHand.setAttribute("src", `imgs/${playerSelection}.png`);
    playerHand.setAttribute('class', 'choiceMade');
    computerHand.setAttribute("src", `imgs/${computerSelection}.png`);
    computerHand.setAttribute("class", "choiceMade");
    roundText.textContent = `Round: ${rounds}`;
  
    if (playerSelection == computerSelection) {
      draw(playerSelection, computerSelection);  
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
      playerWins(playerSelection, computerSelection,);
    }else if (playerSelection == "paper" && computerSelection == "rock"){
      playerWins(playerSelection, computerSelection,);
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
      playerWins(playerSelection, computerSelection,);
    }else{
      computerWins(playerSelection, computerSelection);
    }

}

//Add evenetListener - Game starts when click is made
for (i= 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', e => {
  playerSelection = (e.target.id);
  playRound(playerSelection, computerSelection())
  })
}
