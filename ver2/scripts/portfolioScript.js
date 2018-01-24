const currPage = sitePages[1];

let previewList = [];

function buildPreview(name, description, link, img){
    let newItem = new Object;
    newItem.name = name;
    newItem.desc = description;
    newItem.link = 'portfolioPages/'+link;
    newItem.img = 'portfolioPages/images/'+img;
    previewList.push(newItem);
}

function createPreview(arr){
    creEl('div', 'portfolioContain', main);
    for(let i = 0; i < arr.length; i++){
        creEl('div', ['portfolioDiv', arr[i].name.toLowerCase()+'Div'], document.getElementsByClassName('portfolioContain')[0]);
        document.getElementsByClassName(arr[i].name.toLowerCase()+'Div')[0].style.backgroundImage="url("+arr[i].img+")";
        creEl('div', 'portfolioDivBack',document.getElementsByClassName(arr[i].name.toLowerCase()+'Div')[0])
        creEl('div', ['portfolioTitle', arr[i].name.toLowerCase()+'Title'],document.getElementsByClassName('portfolioDivBack')[i], arr[i].name);
        creEl('div', 'portfolioDesc', document.getElementsByClassName('portfolioDivBack')[i], arr[i].desc);
        creEl('div', 'portfolioButton', document.getElementsByClassName('portfolioDivBack')[i], 'View ' + arr[i].name);
        opnPg( document.getElementsByClassName('portfolioButton')[i],arr[i].link, true);

        document.getElementsByClassName('portfolioDivBack')[i].addEventListener('mouseover', function(){
            document.getElementsByClassName('portfolioDesc')[i].style.display="block";
            document.getElementsByClassName('portfolioButton')[i].style.display="inline-block";
        })
        document.getElementsByClassName('portfolioDivBack')[i].addEventListener('mouseout', function(){
            document.getElementsByClassName('portfolioDesc')[i].style.display="none";
            document.getElementsByClassName('portfolioButton')[i].style.display="none";
        })
    }
}


(function initPortfolio(){
    buildPreview('Checkers', 'A two player game of checkers.', 'checkers.html', 'prev-checkers.png');
    buildPreview('Calculator', 'A calculator with previous input saves and user friendly input.', 'calculator.html', 'prev-calculator.png');
    buildPreview('TicTacToe', 'A game of Tic-Tac-Toe against a computer opponent.', 'tictactoe.html', 'prev-tictactoe.png');
    buildPreview('Calendar', 'A Calendar application which displays the current date and can scroll through months.', 'calendar.html', 'prev-calendar.png');
    //buildPreview('Calculator', 'A calculator built using only JavaScript', 'portfolio/calculator.html', 'prev-calculator.png');
    createPreview(previewList);
    console.log(previewList);
})()