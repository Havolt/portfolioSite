let portProjectData = new Object;

function projectDataInfo(title, app, desc){
    portProjectData.title = title;
    portProjectData.app = app;
    portProjectData.desc = desc;
}


/////App data goes below here




let d = new Date();

const monthListArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayListArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const colVal = 6;
const rowVal = 7;
let calHead;
let monthDisp;
let monthMore;
let monthLess;
let dateList;
let allTilesArr = [];
let allTilesArrClone = [];




let currMonth = d.getMonth();
let currYear = d.getYear();
let currDate = d.getDate();

let monthRun = 0;
let cD = new Date();





function createGeneral(){
  const calHeader = document.createElement('div');
  calHeader.id = "calHead";
  app.appendChild(calHeader);
  const monthDis = document.createElement('h2');
  monthDis.id = 'monthDisp';
  calHeader.appendChild(monthDis);
  const monthMinus = document.createElement('button');
  monthMinus.id = 'monthLess';
  monthMinus.innerHTML = '<i class="fa fa-angle-left"></i>';
  monthMinus.addEventListener('click', function(){
    if(currMonth == 0){
      currMonth = 11;
      currYear--;
    }
    else{currMonth--;}
    changeMonth(currMonth, currYear);
    changeDate(currYear, currMonth)
  });
  calHeader.appendChild(monthMinus);
  const monthPlus = document.createElement('button');
  monthPlus.id = 'monthMore';
  monthPlus.innerHTML = '<i class="fa fa-angle-right"></i>'
  monthPlus.addEventListener('click', function(){
    if(currMonth == 11){
      currMonth = 0;
      currYear++;
    }
    else{currMonth++;}
    changeMonth(currMonth, currYear);
    changeDate(currYear, currMonth)
  })
  calHeader.appendChild(monthPlus);
  createGrid();
}

function createGrid(){
  const dayLis = document.createElement('div');
  dayLis.id = "dayList";
  app.appendChild(dayLis);
  for(var i = 0; i < 7; i++){
    const dayLisName = document.createElement('div');
    dayLisName.classList = 'nameTile tile';
    dayLisName.innerHTML = dayListArr[i];

    dayLis.appendChild(dayLisName);
  }

  const dateLis = document.createElement('div');
  dateLis.id = "dateList";
  app.appendChild(dateLis);
  for(var i = 0; i < colVal; i++){
    for(var j = 0; j < rowVal; j++){
      const dateLisTile = document.createElement('div');
      dateLisTile.id = i+''+j;
      dateLisTile.classList = 'tile';
      dateLis.appendChild(dateLisTile);
      allTilesArr.push(i+''+j);
    }
  }
}

function changeMonth(mon, year){

  monthDisp.innerHTML = monthListArr[mon];
  monthDisp.innerHTML += ' ' + (year + 1900);
}

function changeDate(year, month){
  cD.setFullYear(year + 1900, month, 1);
  let dateCheck = 2;
  let startPos = cD.getDay();
  const startPos2 = startPos;
  let firstLetter = 0;

  allTilesArrClone = [];
  for(var i = 0; i < allTilesArr.length; i++){allTilesArrClone[i] = allTilesArr[i]};

  while(cD.getMonth() == month && dateCheck < 32){
    dateCheck++;
    cD.setDate(dateCheck);
  }
  dateCheck--;
  for(var i = 1; i <= dateCheck; i++){
      document.getElementById(firstLetter + '' + startPos).innerHTML = i;
      document.getElementById(firstLetter + '' + startPos).style.backgroundColor="#d9dde2";
      if(d.getDate() == i && ((d.getMonth()+1) == cD.getMonth() && d.getYear() == year) ){
        console.log(cD.getMonth());
        console.log(d.getMonth()+1)
        console.log('yes')
        document.getElementById(firstLetter + '' + startPos).style.backgroundColor="#FFFDF4";
      }
      for(var j = 0; j < allTilesArrClone.length; j++){

        if(allTilesArrClone[j] == (firstLetter + '' + startPos)){
        console.log(i)
        allTilesArrClone.splice(j, 1);
        }
      }
      startPos++;
      if(startPos == 7){
        startPos = 0;
        firstLetter++;
      }
    }
  for(var i = 0; i < allTilesArrClone.length; i++){
    document.getElementById(allTilesArrClone[i]).innerHTML='-';
  }
  }




function assigners(){
  calHead = document.getElementById('calHead');
  monthDisp = document.getElementById('monthDisp');
  monthMore = document.getElementById('monthMore');
  monthLess = document.getElementById('monthLess');
  dateList = document.getElementById('dateList');
}



function initApp(){
  createGeneral();
  assigners();
  changeMonth(d.getMonth(), d.getYear());
  changeDate(d.getYear(), d.getMonth())
}



/////App data goes above here

(function initProjectData(){
    projectDataInfo('Calendar', initApp, 'Calendar which can scroll months and show correct dates for each one. Calendar also displays the current date.');
})()