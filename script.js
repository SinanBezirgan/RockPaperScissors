function computerPlay() {
  let values = ['rock','paper','scissors'];
  let index = Math.floor(Math.random()*values.length);
  return values[index];
}

let userScore = 0;
let compScore = 0;

let playerSelection;
const computerSelection = computerPlay();  
let images = document.getElementsByTagName('img');
let buttons = document.getElementsByClassName('selectionBtn');
let rockBtn = document.getElementById('rockButton');
let paperBtn = document.getElementById('paperButton');
let scisBtn = document.getElementById('scissorsButton');
let resBtn = document.getElementById('resetButton');
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName('close')[0];
span.addEventListener('click',exit);
resBtn.addEventListener('click',resetGame);
scisBtn.addEventListener('click',scisSelection);
rockBtn.addEventListener('click',rockSelection);
paperBtn.addEventListener('click',paperSelection);
const output= document.getElementsByClassName('winnerArea');
const outputArr = Array.from(output);
const computerScore = document.getElementById('compScore');
const yourScore = document.getElementById('userScore');
let secim = '';

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseenter',hovering);
  buttons[i].addEventListener('mouseleave',stophvr);
} 

for (i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseenter',hoverpls);
  images[i].addEventListener('mouseleave',stopImg);
}
function hoverpls() {
  this.classList.add('hoveringPics');
}
function stopImg() {
  this.classList.remove('hoveringPics');
}
function hovering() {
  this.classList.add('hovering');
}
function stophvr() {
  this.classList.remove('hovering');
}
function exit() {
  resetGame();
  modal.style.display = 'none';
}
       
window.onclick = function(event) {
  if(event.target == modal) {
    resetGame();
    modal.style.display = 'none';
  }
}
function rockSelection() {
  secim = 'rock';
  const pcChoice = computerPlay();
  if (pcChoice === 'rock') {
    outputArr[0].innerHTML = '<br><br>Computer played rock. This round is a tie';
  }
  else if (pcChoice === 'paper') {
    compScore++;
    outputArr[0].innerHTML = '<br><br>Computer played paper. You lost this round';
    computerScore.textContent = `${compScore}`;
  }
  else if (pcChoice === 'scissors') {
    userScore++;
    outputArr[0].innerHTML = '<br><br>Computer played scissors. You won this round';
    yourScore.textContent = `${userScore}`;  
  }
  gameCheck();
}
function paperSelection() {
  secim = 'paper';
  const pcChoice = computerPlay();
  if (pcChoice === 'rock') {
    userScore++;
    outputArr[0].innerHTML = '<br><br>Computer played rock. You won this round';
    yourScore.textContent = `${userScore}`;
  }
  else if (pcChoice === 'paper') {
    outputArr[0].innerHTML = '<br><br>Computer played paper. This round is a tie';
  }
  else if (pcChoice === 'scissors'){  
    compScore++;
    outputArr[0].innerHTML = '<br><br>Computer played scissors. You lost this round';
    computerScore.textContent = `${compScore}`;   
  }
  gameCheck();
}

function scisSelection() {        
  secim = 'scissors';
  const pcChoice = computerPlay();
  if (pcChoice === 'rock') {
    compScore++;
    outputArr[0].innerHTML = '<br><br>Computer played rock. You lost this round';
    computerScore.textContent = `${compScore}`;
  }
  else if (pcChoice === 'paper') {
    userScore++;
    outputArr[0].innerHTML = '<br><br>Computer played paper. You won this round';
    yourScore.textContent = `${userScore}`;
  }
  else if (pcChoice === 'scissors') { 
    outputArr[0].innerHTML = '<br><br>Computer played scissors. This round is a tie';     
  }
  gameCheck();
}

function gameCheck() {
  if (userScore == 5 || compScore == 5) {
    outputArr[0].innerHTML = `<br><br>${compScore == 5 ? 'Computer' : 'User'} has won this round. The score is : ${compScore}-${userScore}`;
    let sonText = document.getElementById('modalText');
    sonText.textContent = `${compScore == 5 ? 'Computer' : 'User'} has won this round. The score is : ${compScore}-${userScore}`;
    modal.style.display = 'block';
  } 
}

function resetGame(){      
  userScore = 0;
  compScore = 0;
  yourScore.textContent = `${userScore}`;
  computerScore.textContent =`${compScore}`;
  outputArr[0].innerHTML = '<br><br>You have reset the game. Please make a new selection to start over.';
}




                   
                 
      
        
            
        
       
    