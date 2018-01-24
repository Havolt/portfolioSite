let portProjectData = new Object;

function projectDataInfo(title, app, desc){
    portProjectData.title = title;
    portProjectData.app = app;
    portProjectData.desc = desc;
}


/////App data goes below here



const soundOne = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
const soundTwo = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
const soundThree = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
const soundFour = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

let strictSwitchOff;
let centerPiece;
let strictSwitchOn;
let strictContainer;
let strictBool = false;
let greenButton;
let redButton;
let blueButton;
let yellowButton;
let pressCounter;
let startButton;

// Strict Switch Section //

function strictMode(){
  strictBool = !strictBool;
}

function strictSwitchChange(){
    resetAll();
    if(!strictBool){
      strictSwitchOn.style.backgroundColor="#5280c9";
      strictSwitchOff.style.backgroundColor="white";
      strictBool = !strictBool;
    }
    else{
      strictSwitchOn.style.backgroundColor="white";
      strictSwitchOff.style.backgroundColor="#5280c9";
      strictBool = !strictBool;
    }
}

// End of Swtich Section //

// Creating Color Button //

function createButtons(){
  const greenButt = document.createElement('div');
  greenButt.id = "greenButton"
  greenButt.classList="bigButton";
  app.appendChild(greenButt);
  const redButt = document.createElement('div');
  redButt.id = "redButton";
  redButt.classList="bigButton";
  app.appendChild(redButt);
  const yellowButt = document.createElement('div');
  yellowButt.id = "yellowButton";
  yellowButt.classList="bigButton";
  app.appendChild(yellowButt);
  const blueButt = document.createElement('div');
  blueButt.id = "blueButton";
  blueButt.classList="bigButton";
  app.appendChild(blueButt);
}

// End Create Color Button

//Creating Center Piece

function createCenter(){
  const centerPart = document.createElement('div');
  centerPart.id="centerId";
  app.appendChild(centerPart);

  //Title
  const simonTitle = document.createElement('h1');
  simonTitle.innerHTML="Simon";
  simonTitle.style.fontSize="4em";
  simonTitle.style.position="absolute";
  simonTitle.style.left="55px";
  simonTitle.style.top="5px";
  centerPart.appendChild(simonTitle);

  //Counter
  const countDiv = document.createElement('div');
  countDiv.style.backgroundColor="black";
  countDiv.style.width="60px";
  countDiv.style.height="40px";
  countDiv.style.position="absolute";
  countDiv.style.borderRadius="10%";
  countDiv.style.left="65px";
  countDiv.style.top="140px";
  centerPart.appendChild(countDiv);
  const countDivNum = document.createElement('h2');
  countDivNum.innerHTML="--";
  countDivNum.id="pressCounter";
  countDiv.appendChild(countDivNum);
  //Start Button
  const startButtDiv = document.createElement('div');
  startButtDiv.style.height="60px";
  startButtDiv.style.width="70px";
  startButtDiv.style.position="absolute";
  startButtDiv.style.left="170px";
  startButtDiv.style.top="140px";
  centerPart.appendChild(startButtDiv);
  const startButtButton = document.createElement('div');
  startButtButton.id="startButton";
  startButtDiv.appendChild(startButtButton);
  const startButtText = document.createElement('h4');
  startButtText.innerHTML="START/RESET";
  startButtText.style.position="relative";
  startButtText.style.top="-22px";
  startButtText.style.left="-30px";
  startButtDiv.appendChild(startButtText);



  //Strict Button
  const strictContain = document.createElement('div');
  strictContain.id="strictContainer";
  strictContainer = document.getElementById('strictContainer');
  centerPart.appendChild(strictContain);
  const strictHeadOff = document.createElement('h5');
  strictHeadOff.style.display="inline-block"
  strictHeadOff.style.float="left";
  strictHeadOff.style.color="white";
  strictHeadOff.innerHTML="OFF";
  strictContain.appendChild(strictHeadOff)
  const strictSwitchOffDiv = document.createElement('div');
  strictSwitchOffDiv.id = "strictSwitchOff";
  strictSwitchOffDiv.classList="strictSwitchClass"
  strictSwitchOffDiv.style.backgroundColor="#5280c9";

  strictContain.appendChild(strictSwitchOffDiv);
  const strictSwitchOnDiv = document.createElement('div');
  strictSwitchOnDiv.id = "strictSwitchOn";
  strictSwitchOnDiv.classList="strictSwitchClass"

  strictContain.appendChild(strictSwitchOnDiv);
  const strictHeadOn = document.createElement('h5');
  strictHeadOn.style.display="inline-block"
  strictHeadOn.style.float="left";
  strictHeadOn.style.color="white";
  strictHeadOn.innerHTML="ON";
  strictContain.appendChild(strictHeadOn)
  strictSwitchOnDiv.addEventListener('click', strictSwitchChange);
  strictSwitchOffDiv.addEventListener('click', strictSwitchChange);

  const strictButtText = document.createElement('h4');
  strictButtText.innerHTML="STRICT&nbsp;MODE";
  strictButtText.style.position="relative";
  strictButtText.style.top="2px";
  strictButtText.style.left="-1px";
  strictContain.appendChild(strictButtText);
}

//Ending Center Piece Creator

//Simon Make Playable Functions

let totalSaysArr = [];
let prevSaysArr = [];
let currSaysArr = [];
let playerSaysArr = [];
let prevSaysArrBackup = [];
let simonOn = false;
let pressCounterNum = 0;
let pressRunner = 0;
let buttonRunner;
let playerTurnTrue = false;
let playPress = 0;
let time = 600;
let intervalTime = 1200;
let greenPressed = 0;
let redPressed = 0;
let yellowPressed = 0;
let bluePressed = 0;
let playerFail = false;

//Debug lets
let timesFuncCalled = 0;

function makeSaysList(){
  totalSaysArr = [];
  for(var i = 0; i < 20; i++){
    const randSay = Math.floor(Math.random()*4);
    totalSaysArr.push(randSay);
  }
}

function mainGame(){
  if(simonOn == false){
    simonOn = true;
    pressCounter.innerHTML=pressCounterNum;
    setTimeout(comTurn, 800);
  }
  else{
    resetAll();
    mainGame();
    console.log(totalSaysArr);
  }
}

function resetAll(){
  totalSaysArr = [];
  for(var i = 0; i < 20; i++){
    const randSay = Math.floor(Math.random()*4);
    totalSaysArr.push(randSay);
  }
  currSaysArr = [];
  pressCounterNum = 0;
  pressRunner = 0;
  buttonRunner = undefined;
  playerTurnTrue = false;
  playPress = 0;
  time = 600;
  simonOn = false;
  intervalTime = 1200;
  greenPressed = 0;
  redPressed = 0;
  yellowPressed = 0;
  bluePressed = 0;
  playerFail = false;
  prevSaysArr = [];
  playerSaysArr = [];
  prevSaysArrBackup = [];
  pressCounter.innerHTML="--";
}

function comTurn(){
  if(pressRunner > 19){
    pressCounter.innerHTML="OK";
    (function(){
      greenButton.style.backgroundColor="#23ff27";
      soundOne.play();
      setTimeout(function(){
        greenButton.style.backgroundColor="#028400";
      }, 200);
      setTimeout(function(){
        redButton.style.backgroundColor="red";
        soundTwo.play();
      }, 250);
      setTimeout(function(){
        redButton.style.backgroundColor="#c10000";
      }, 450);
      setTimeout(function(){
        blueButton.style.backgroundColor="#609bf7";
        soundFour.play();
      }, 500);
      setTimeout(function(){
        blueButton.style.backgroundColor="#2255a5";
      }, 700);
      setTimeout(function(){
        yellowButton.style.backgroundColor="#ffff68";
        soundThree.play();
      }, 750);
      setTimeout(function(){
        yellowButton.style.backgroundColor="#b5b52b";
      }, 950);

      setTimeout(function(){
        greenButton.style.backgroundColor="#23ff27";
        soundOne.play();
      }, 1000)
      setTimeout(function(){
        greenButton.style.backgroundColor="#028400";
      }, 1200);
      setTimeout(function(){
        redButton.style.backgroundColor="red";
        soundTwo.play();
      }, 1250);
      setTimeout(function(){
        redButton.style.backgroundColor="#c10000";
      }, 1450);
      setTimeout(function(){
        blueButton.style.backgroundColor="#609bf7";
        soundFour.play();
      }, 1500);
      setTimeout(function(){
        blueButton.style.backgroundColor="#2255a5";
      }, 1700);
      setTimeout(function(){
        yellowButton.style.backgroundColor="#ffff68";
        soundThree.play();
      }, 1750);
      setTimeout(function(){
        yellowButton.style.backgroundColor="#b5b52b";
      }, 1950);

      setTimeout(function(){
        greenButton.style.backgroundColor="#23ff27";
        soundOne.play();
      }, 2000)
      setTimeout(function(){
        greenButton.style.backgroundColor="#028400";
      }, 2200);
      setTimeout(function(){
        redButton.style.backgroundColor="red";
        soundTwo.play();
      }, 2250);
      setTimeout(function(){
        redButton.style.backgroundColor="#c10000";
      }, 2450);
      setTimeout(function(){
        blueButton.style.backgroundColor="#609bf7";
        soundFour.play();
      }, 2500);
      setTimeout(function(){
        blueButton.style.backgroundColor="#2255a5";
      }, 2700);
      setTimeout(function(){
        yellowButton.style.backgroundColor="#ffff68";
        soundThree.play();
      }, 2750);
      setTimeout(function(){
        yellowButton.style.backgroundColor="#b5b52b";
      }, 2950);
    })()

    setTimeout(function(){
      simonOn = false;
      resetAll();
      return;
    }, 3000);

  }
  simonOn = true;
  const stopInputDiv = document.createElement('div');
  stopInputDiv.id = "coverAll";
  stopInputDiv.style.width="700px";
  stopInputDiv.style.height="700px";
  stopInputDiv.style.zIndex="4000";
  stopInputDiv.style.left="150px";
  stopInputDiv.style.top="-100px";
  //stopInputDiv.style.backgroundColor="black";
  stopInputDiv.style.position="fixed";
  centerId.appendChild(stopInputDiv);

  playerTurnTrue = false;
  currSaysArr.push(totalSaysArr[pressRunner]);
  pressRunner++;

  if(pressRunner > 7 && pressRunner < 14){
    time = 400;
    intervalTime = 800;
  }
  else if(pressRunner > 14 && pressRunner < 21){
    time = 300;
    intervalTime = 500;
  }
    buttonRunner = 0;
    for(var i = 0; i < currSaysArr.length; i++) {

      (function() {
      setTimeout(function() {
      if(currSaysArr[buttonRunner] == 0){
        greenButton.style.backgroundColor="#23ff27";
        soundOne.play();
        setTimeout(function(){greenButton.style.backgroundColor="#028400"}, time);
      }
      else if(currSaysArr[buttonRunner] == 1){
        redButton.style.backgroundColor="red";
        soundTwo.play();
        setTimeout(function(){redButton.style.backgroundColor="#c10000"}, time);
      }
      else if(currSaysArr[buttonRunner] == 2){
        yellowButton.style.backgroundColor="#ffff68";
        soundThree.play();
        setTimeout(function(){yellowButton.style.backgroundColor="#b5b52b"}, time);
      }
      else if(currSaysArr[buttonRunner] == 3){
        blueButton.style.backgroundColor="#609bf7";
        soundFour.play();
        setTimeout(function(){blueButton.style.backgroundColor="#2255a5"}, time);
      }
      buttonRunner++;
      if(buttonRunner == currSaysArr.length){
        prevSaysArrBackup = [];
        for(var i = 0; i < currSaysArr.length; i++){
          prevSaysArr.push(currSaysArr[i]);
          prevSaysArrBackup.push(currSaysArr[i]);
        }
      }
    }, i * intervalTime);
    })(i);
  }
  setTimeout(function(){centerId.removeChild(stopInputDiv)}, (intervalTime - 220) * (currSaysArr.length));
  }

function playFail(){
  prevSaysArr = [];
  for(var i =0; i < prevSaysArrBackup.length; i++){
    prevSaysArr.push(prevSaysArrBackup[i]);
  }
  for(var i = 0; i < prevSaysArr.length; i++){
    setTimeout(function(){
      console.log(i + " = i");
    }, i * 500)
  }
  let failRunner = 0;
  //Test Area
  for(var i = 0; i < prevSaysArr.length; i++) {

            (function() {
            setTimeout(function() {
            if(currSaysArr[failRunner] == 0){
              greenButton.style.backgroundColor="#23ff27";
              soundOne.play();
              console.log('green');
              setTimeout(function(){greenButton.style.backgroundColor="#028400"}, time);
            }
            else if(currSaysArr[failRunner] == 1){
              redButton.style.backgroundColor="red";
              soundTwo.play();
              console.log('red');
              setTimeout(function(){redButton.style.backgroundColor="#c10000"}, time);
            }
            else if(currSaysArr[failRunner] == 2){
              yellowButton.style.backgroundColor="#ffff68";
              console.log('yellow');
              soundThree.play();
              setTimeout(function(){yellowButton.style.backgroundColor="#b5b52b"}, time);
            }
            else if(currSaysArr[failRunner] == 3){
              blueButton.style.backgroundColor="#609bf7";
              soundFour.play();
              console.log('blue');
              setTimeout(function(){blueButton.style.backgroundColor="#2255a5"}, time);
            }
            failRunner++;
            }, i * 1200);
          })(i);
          }
}

function playerTurn(num){
  timesFuncCalled++;
  let countdown = 0;
  if(num == prevSaysArr[0] ){
    countdown++;
    if(num == 0){
      greenButton.style.backgroundColor="#23ff27";
      soundOne.play();
      setTimeout(function(){greenButton.style.backgroundColor="#028400"}, 400);
    }
    else if(num == 1){
      redButton.style.backgroundColor="red";
      soundTwo.play();
      setTimeout(function(){redButton.style.backgroundColor="#c10000"}, 400);
    }
    else if(num == 2){
      yellowButton.style.backgroundColor="#ffff68";
      soundThree.play();
      setTimeout(function(){yellowButton.style.backgroundColor="#b5b52b"}, 400);
    }
    else if(num == 3){
      blueButton.style.backgroundColor="#609bf7";
      soundFour.play();
      setTimeout(function(){blueButton.style.backgroundColor="#2255a5"}, 400);
    }
    prevSaysArr.shift();
    //console.log(prevSaysArr);
    if(countdown == 19){
      setTimeout(function(){alert('You Win')},200);
    }
    if(prevSaysArr[0] == undefined){
      pressCounterNum++;
      pressCounter.innerHTML=pressCounterNum;
      setTimeout(comTurn, 900);
    }
  }
  else{
    (function(){
      greenButton.style.backgroundColor="#23ff27";
      soundOne.play();
      setTimeout(function(){greenButton.style.backgroundColor="#028400"}, 400);
      redButton.style.backgroundColor="red";
      soundTwo.play();
      setTimeout(function(){redButton.style.backgroundColor="#c10000"}, 400);
      yellowButton.style.backgroundColor="#ffff68";
      soundThree.play();
      setTimeout(function(){yellowButton.style.backgroundColor="#b5b52b"}, 400);
      blueButton.style.backgroundColor="#609bf7";
      soundFour.play();
      setTimeout(function(){blueButton.style.backgroundColor="#2255a5"}, 400);
      setTimeout(function(){greenButton.style.backgroundColor="#23ff27";
      soundOne.play();
      setTimeout(function(){greenButton.style.backgroundColor="#028400"}, 400);
      redButton.style.backgroundColor="red";
      soundTwo.play();
      setTimeout(function(){redButton.style.backgroundColor="#c10000"}, 400);
      yellowButton.style.backgroundColor="#ffff68";
      soundThree.play();
      setTimeout(function(){yellowButton.style.backgroundColor="#b5b52b"}, 400);
      blueButton.style.backgroundColor="#609bf7";
      soundFour.play();
      setTimeout(function(){blueButton.style.backgroundColor="#2255a5"}, 400);}, 600)
      setTimeout(function(){
        greenButton.style.backgroundColor="#23ff27";
        soundOne.play();
        setTimeout(function(){greenButton.style.backgroundColor="#028400"}, 400);
        redButton.style.backgroundColor="red";
        soundTwo.play();
        setTimeout(function(){redButton.style.backgroundColor="#c10000"}, 400);
        yellowButton.style.backgroundColor="#ffff68";
        soundThree.play();
        setTimeout(function(){yellowButton.style.backgroundColor="#b5b52b"}, 400);
        blueButton.style.backgroundColor="#609bf7";
        soundFour.play();
        setTimeout(function(){blueButton.style.backgroundColor="#2255a5"}, 400);},1200)

    }
    )()
    prevSaysArr = currSaysArr;
    if(!strictBool){
      setTimeout(playFail, 2000);
    }
    else{
      pressCounter.innerHTML = "--";
      setTimeout(function(){
        resetAll();
        comTurn();
      }, 2000);

      }
    }
  }

//End Simon Make PLayable Functions

function idAssigners(){
  strictSwitchOff = document.getElementById('strictSwitchOff');
  strictSwitchOn = document.getElementById('strictSwitchOn');
  greenButton = document.getElementById('greenButton');
  redButton = document.getElementById('redButton');
  yellowButton = document.getElementById('yellowButton');
  blueButton = document.getElementById('blueButton');
  centerPiece = document.getElementById('centerId');
  pressCounter = document.getElementById('pressCounter');
  startButton = document.getElementById('startButton');
  coverAll = document.getElementById('coverAll');
}


function initApp(){
  createButtons();
  createCenter();
  idAssigners();
  makeSaysList();
  greenButton.addEventListener('click', function(){playerTurn(0); playPress++;});
  redButton.addEventListener('click', function(){playerTurn(1); playPress++;});
  yellowButton.addEventListener('click', function(){playerTurn(2); playPress++;});
  blueButton.addEventListener('click', function(){playerTurn(3); playPress++;});
  startButton.addEventListener('click', mainGame);
};



/////App data goes above here

(function initProjectData(){
    projectDataInfo('Simon', initApp, 'This is a recreation of the game Simon. The player watches a sequence of commands and then pushes the buttons in order they lit up. When the sequence is complete it will repeat with one more command. There is also a strict mode which increases the difficulty by restarting the entire sequence on failure.');
})()