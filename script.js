//for rule button and close button

document.getElementById('RuleS-btn').addEventListener('click', function() {
    document.getElementById('rules-popup').style.display = 'block';
});
document.getElementById('Close-btn').addEventListener('click', function() {
    document.getElementById('rules-popup').style.display = 'none';
});


//userScore compScore
let userScore = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) :0;
let compScore = localStorage.getItem('compScore') ? parseInt(localStorage.getItem('compScore')) :0;

//choicess
const choicess = document.querySelectorAll(".choice");
const compScorePara = document.querySelector("#computer-score");
const userScorePara = document.querySelector("#your-score");


//result
const SCOREBOARD = document.querySelector("#score-board");
const OPTIONS = document.querySelector("#options");
const PCWIN = document.querySelector("#pc-win");

//fun for update score from localstorage
function updateScores() {
  userScorePara.textContent = userScore;
  compScorePara.textContent = compScore;
  
}
//fun for update lable
function updatelebal() {
localStorage.getItem('userScore',userScore)
  document.getElementById('your-score').textContent=userScore;
  localStorage.getItem('compScore',compScore)
  document.getElementById('computer-score').textContent=compScore;
}

updatelebal()

//fun  to get pc choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  console.log("clicked",randIdx);
  return options[randIdx];
  
  };

// Main logic
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    
    drawGame(userChoice,compChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
      
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
   
    
  }}

//fun for update pc choice image
  const case2 = (compChoice) => {
    if (compChoice === "rock") {document.getElementById('pc-choice').src='./Assets/R.PNG';
    }
    else if (compChoice === "paper") {document.getElementById('pc-choice').src='./Assets/P.PNG';
    }
    else {document.getElementById('pc-choice').src='./Assets/S.PNG';
    }
  };


  //fun for update pc choice image
  const case1 = (userChoice) => {
    if (userChoice === "rock") {document.getElementById('user-choice').src='./Assets/R.PNG'; 
    }
    else if (userChoice === "paper") {document.getElementById('user-choice').src='./Assets/P.PNG';
    }
    else {document.getElementById('user-choice').src='./Assets/S.PNG';
    } 
  };

  
  //fun for winner
  const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
      userScore++;
      localStorage.setItem('userScore', userScore);
      updateScores(userScore);
      userScorePara.innerText = userScore;
      OPTIONS.style.display='none';
      PCWIN.style.display='block';
      document.getElementById('next-btn').style.visibility='visible';
      document.getElementById('cir1').style.visibility='visible';
      document.getElementById('cirA').style.visibility='visible';
      document.getElementById('cirB').style.visibility='visible';
      document.getElementById('cirC').style.visibility='visible';
      document.getElementById('label-4').style.visibility='hidden';
      document.getElementById('label-1').style.visibility='visible';
      document.getElementById('label-2').style.visibility='hidden';
      document.getElementById('rules-popup').style.display = 'none';
      case1 (userChoice);
      case2 (compChoice);
    } else {
      compScore++;
      localStorage.setItem('compScore', compScore);
      updateScores(compScore);
      compScorePara.innerText = compScore;
      OPTIONS.style.display='none';
      PCWIN.style.display='block';
      document.getElementById('label-4').style.visibility='hidden';
      document.getElementById('cirD').style.visibility='visible'
      document.getElementById('cirE').style.visibility='visible'
      document.getElementById('cirF').style.visibility='visible'
      document.getElementById('cir2').style.visibility='visible';
      document.getElementById('label-1').style.visibility='hidden';
      document.getElementById('label-2').style.visibility='visible';
      document.getElementById('rules-popup').style.display = 'none';
      case1 (userChoice);
      case2 (compChoice);}
  };
//fun  to get user choice
  const drawGame = (userChoice,compChoice) => {
    console.log("clickeddddddd") ;
    document.getElementById('rules-popup').style.display = 'none';
    OPTIONS.style.display='none';
    PCWIN.style.display='block';
    document.getElementById('label-4').style.visibility='visible'
    document.getElementById('label-3').style.visibility='hidden'
    document.getElementById('label-1').style.visibility='hidden'
    document.getElementById('label-2').style.visibility='hidden'
    case1 (userChoice);
    case2 (compChoice);
    
  }  
  document.getElementById('next-btn').addEventListener('click', function() {    
    document.getElementById('sta-rs').style.visibility='visible';
    document.getElementById('label-5').style.visibility='visible';
    document.getElementById('label-6').style.visibility='visible';
    document.getElementById('tro-phy').style.visibility='visible';
    document.getElementById('Playagain-hurray').style.visibility='visible';
    document.getElementById('next-btn').style.visibility='hidden';
    
    OPTIONS.style.display='none';
    PCWIN.style.display='none';
    SCOREBOARD.style.display='none';

    document.getElementById('Playagain-hurray').addEventListener('click', function() {  
      window.location.reload();
     });


   });
  //fun for play againbutton
  document.getElementById('Playagain-lose').addEventListener('click', function() {
    document.getElementById('cirA').style.visibility='hidden';
    document.getElementById('next-btn').style.visibility='hidden';
    document.getElementById('cirB').style.visibility='hidden';
    document.getElementById('cirC').style.visibility='hidden';
    document.getElementById('cirD').style.visibility='hidden';
    document.getElementById('cirE').style.visibility='hidden';
    document.getElementById('cirF').style.visibility='hidden';
    document.getElementById('cir1').style.visibility='hidden';
    document.getElementById('cir2').style.visibility='hidden';
    OPTIONS.style.display='block';
    PCWIN.style.display='none';
     });
   

  //fun for update pc choice image
choicess.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("clicked",userChoice);
    playGame(userChoice);
    updateScores()
  });
});