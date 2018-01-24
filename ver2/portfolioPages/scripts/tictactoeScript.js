let portProjectData = new Object;

function projectDataInfo(title, app, desc){
    portProjectData.title = title;
    portProjectData.app = app;
    portProjectData.desc = desc;
}


/////App data goes below here


const gridBoxClass = document.getElementsByClassName('gridBox');
const winStateClass = document.getElementsByClassName('winStateClass');
const ticTacTitle = document.getElementById('ticTacTitle')

let retryButton;
let gameOver = false;
let gridBlank = false;
let userTurn = true;
let userInput = 'X';
let runner = 0;
let rando;
let comInput = 'O'
let gridContent = [0,0,0,
                   0,0,0,
                   0,0,0];

function chooseY(){
  userInput = 'O';
  comInput = 'X';
  buildMap();
}

function buildMap(){
  app.style.backgroundColor="#f7f7f7";
  app.innerHTML="";
  for(var i = 0; i < gridContent.length; i++){
    const gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    gridBox.name=i;
    app.appendChild(gridBox);
    console.log(180);
  }
  for(var i = 0; i < gridBoxClass.length; i++){
    gridBoxClass[i].addEventListener('click', placeSymbol);
  }
}

function chooseSymbol(){
    const questionUser = document.createElement('h2');
    app.style.backgroundColor="#1d3151";
    questionUser.style.color="white";
    questionUser.innerHTML="Would you like to play as X or O?";
    questionUser.style.textAlign="center";
    questionUser.style.fontSize="2em";
    questionUser.style.marginTop="120px";
    app.appendChild(questionUser);
    const pickX = document.createElement('h1');
    const pickY = document.createElement('h1');
    pickX.innerHTML="X";
    pickY.innerHTML="O";
    pickX.classList="symbolPick";
    pickY.classList="symbolPick";
    app.appendChild(pickX);
    app.appendChild(pickY);
    pickX.addEventListener('click', buildMap);
    pickY.addEventListener('click', chooseY);
}

function endGameCheck(){
  gridBlank = false;
  for(var i = 0; i < gridContent.length; i++){
    if(gridContent[i] == 0){
      gridBlank = true;
    }
  }
  if(gridContent[0] == gridContent[1] && gridContent[0] == gridContent[2] && gridContent[0] != 0 ||
    gridContent[3] == gridContent[4] && gridContent[3] == gridContent[5]  && gridContent[3] != 0 ||
    gridContent[6] == gridContent[7] && gridContent[6] == gridContent[8]  && gridContent[7] != 0 ||
    gridContent[0] == gridContent[3] && gridContent[0] == gridContent[6]  && gridContent[0] != 0 ||
    gridContent[1] == gridContent[4] && gridContent[1] == gridContent[7]  && gridContent[1] != 0 ||
    gridContent[2] == gridContent[5] && gridContent[2] == gridContent[8]  && gridContent[2] != 0 ||
    gridContent[0] == gridContent[4] && gridContent[0] == gridContent[8]  && gridContent[0] != 0 ||
    gridContent[2] == gridContent[4] && gridContent[2] == gridContent[6]  && gridContent[2] != 0 ||
    gridBlank == false ){

      gameOver = true;
      const winState = document.createElement('div');
      winState.classList="winStateClass";
      app.appendChild(winState);
      const whoWins = document.createElement('h1');
      whoWins.style.color="white";
      whoWins.style.textAlign="center";
      whoWins.style.marginTop="60px";
      if(gridBlank == false){
        whoWins.innerHTML = "Draw!";
      }
      else if(userTurn == true){
        whoWins.innerHTML = "You win!";
      }else if(userTurn == false){
        whoWins.innerHTML = "You lose!";
      }
      app.children[9].appendChild(whoWins);
      const retryButt = document.createElement('h2');
      retryButt.id="retryButton";
      retryButt.innerHTML="Restart";
      retryButton = document.getElementById('retryButton');
      app.children[9].appendChild(retryButt);
      retryButt.addEventListener('click', resetApp);
  }

}

function resetApp(){
  app.innerHTML="";
  retryButton = undefined;
  gameOver = false;
  userTurn = true;
  userInput = 'X';
  runner = 0;
  gridBlank = true;
  comInput = 'O'
  gridContent = [0,0,0,
                 0,0,0,
                 0,0,0];
  chooseSymbol();

}

function placeSymbol(event){
  if(gridContent[event.target.name] == 0){
    event.target.innerHTML=userInput;
    event.target.style.backgroundColor="#c0f9c5";
    gridContent[event.target.name] = 1;
    runner++;
    console.log(event);
    userTurn = true;
    endGameCheck();
    if(runner < gridContent.length && gameOver == false){
      setTimeout(comPlaceSymbol, 80);
    }
  }
}

function comPlaceSymbol(){

  if(gridContent[4] == 0){
     rando = 4;
    console.log(rando);
  }
  else if(gridContent[0] == 1 && gridContent[1] == 1 && gridContent[2] == 0 ||
          gridContent[0] == 2 && gridContent[1] == 2 && gridContent[2] == 0){
      rando = 2;
  }else if(gridContent[3] == 1 && gridContent[4] == 1 && gridContent[5] == 0 ||
           gridContent[3] == 2 && gridContent[4] == 2 && gridContent[5] == 0){
    rando = 5;
  }
  else if(gridContent[6] == 1 && gridContent[7] == 1 && gridContent[8] == 0 ||
          gridContent[6] == 2 && gridContent[7] == 2 && gridContent[8] == 0){
    rando = 8;
  }
  else if(gridContent[1] == 1 && gridContent[2] == 1 && gridContent[0] == 0 ||
          gridContent[1] == 2 && gridContent[2] == 2 && gridContent[0] == 0){
    rando = 0;
  }
  else if(gridContent[4] == 1 && gridContent[5] == 1 && gridContent[3] == 0 ||
          gridContent[4] == 2 && gridContent[5] == 2 && gridContent[3] == 0){
    rando = 3;
  }
  else if(gridContent[7] == 1 && gridContent[8] == 1 && gridContent[6] == 0){
    rando = 6;
  }
  else if(gridContent[0] == 1 && gridContent[2] == 1 && gridContent[1] == 0 ||
          gridContent[0] == 2 && gridContent[2] == 2 && gridContent[1] == 0){
    rando = 1;
  }
  else if(gridContent[3] == 1 && gridContent[5] == 1 && gridContent[4] == 0 ||
          gridContent[3] == 2 && gridContent[5] == 2 && gridContent[4] == 0){
    rando = 4;
  }
  else if(gridContent[6] == 1 && gridContent[8] == 1 && gridContent[7] == 0 ||
          gridContent[6] == 2 && gridContent[8] == 2 && gridContent[7] == 0){
    rando = 7;
  }
  else if(gridContent[0] == 1 && gridContent[3] == 1 && gridContent[6] == 0 ||
          gridContent[0] == 2 && gridContent[3] == 2 && gridContent[6] == 0){
    rando = 6;
  }
  else if(gridContent[1] == 1 && gridContent[4] == 1 && gridContent[7] == 0 ||
          gridContent[1] == 2 && gridContent[4] == 2 && gridContent[7] == 0){
    rando = 7;
  }
  else if(gridContent[2] == 1 && gridContent[5] == 1 && gridContent[8] == 0 ||
          gridContent[2] == 2 && gridContent[5] == 2 && gridContent[8] == 0){
    rando = 8;
  }
  else if(gridContent[0] == 1 && gridContent[6] == 1 && gridContent[3] == 0 ||
          gridContent[0] == 2 && gridContent[6] == 2 && gridContent[3] == 0){
    rando = 3;
  }
  else if(gridContent[1] == 1 && gridContent[7] == 1 && gridContent[4] == 0 ||
          gridContent[1] == 2 && gridContent[7] == 2 && gridContent[4] == 0){
    rando = 4;
  }
  else if(gridContent[2] == 1 && gridContent[8] == 1 && gridContent[5] == 0 ||
          gridContent[2] == 2 && gridContent[8] == 2 && gridContent[5] == 0){
    rando = 5;
  }
  else if(gridContent[0] == 1 && gridContent[4] == 1 && gridContent[8] == 0 ||
          gridContent[0] == 2 && gridContent[4] == 2 && gridContent[8] == 0){
    rando = 8;
  }
  else if(gridContent[2] == 1 && gridContent[4] == 1 && gridContent[6] == 0 ||
          gridContent[0] == 2 && gridContent[4] == 2 && gridContent[8] == 0){
    rando = 6;
  }
  else{
     rando = Math.floor(Math.random()*gridContent.length);
    while(gridContent[rando] != 0){
      rando = Math.floor(Math.random()*gridContent.length);
    }
  }
  gridContent[rando] = 2;
  userTurn = false;
  app.children[rando].innerHTML=comInput;
  app.children[rando].style.backgroundColor="#f9c0c0";
  runner++;
  endGameCheck();
  console.log(gridContent);
}

function initApp(){
  chooseSymbol();
};


/////App data goes above here

(function initProjectData(){
    projectDataInfo('Tic-Tac-Toe', initApp, 'A single player game of Tic-Tac-Toe in which the player goes up against a basic AI to win the game. The player can choose to be X or O and can easily restart the game afterwards. ');
})()