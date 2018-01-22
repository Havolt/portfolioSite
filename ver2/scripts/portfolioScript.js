const currPage = sitePages[1];

let previewList = [];

function buildPreview(name, description, link, img){
    let newItem = new Object;
    newItem.name = name;
    newItem.desc = description;
    newItem.link = 'portfolio/'+link;
    newItem.img = 'portfolioPages/images/'+img;
    previewList.push(newItem);
}

function createPreview(arr){
    creEl('div', 'portfolioContain', main);
    for(let i = 0; i < arr.length; i++){
        creEl('div', ['portfolioDiv', arr[i].name.toLowerCase()+'Div'], document.getElementsByClassName('portfolioContain')[0]);
        document.getElementsByClassName(arr[i].name.toLowerCase()+'Div')[0].style.backgroundImage="url("+arr[i].img+")";
        creEl('div', 'portfolioDivBack',document.getElementsByClassName(arr[i].name.toLowerCase()+'Div')[0])
        creEl('div', ['portfolioTitle', arr[i].name.toLowerCase()+'Title'],document.getElementsByClassName('portfolioDivBack')[0], arr[i].name)
    }
}


(function initPortfolio(){
    buildPreview('Checkers', 'A two player game of checkers', 'portfolio/checkers.html', 'prev-checkers.png');
    createPreview(previewList);
    console.log(previewList);
})()