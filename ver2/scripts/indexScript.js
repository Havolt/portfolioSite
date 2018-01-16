const currPage = sitePages[0];
const introData = [{inHL: 'Hi, I\'m Mark a Front-end Web Developer.', type: 'div', class: 'introMain'}, 
                    {inHL: 'Experienced with GitHub, HTML, CSS, JavaScript.', type: 'div', class: 'introSecond'}];
let portfolioData = {type: 'img', class: 'portfolioImg', src: "images/mountain.jpg" };
let portfolioText = {type: 'div', class: 'portfolioTxt', inHL: 'Interested in seeing my projects?' }
let portfolioButton = {type: 'div', class: 'portfolioButton', inHL: 'View Portfolio', loc : 'portfolio.html' }

function createIntro(arr){
    creEl('div', 'introContain', main);
    for(let i = 0; i < arr.length; i++){
        creEl(arr[i].type, arr[i].class, document.getElementsByClassName('introContain')[0], arr[i].inHL)
    }
}

function createPortfolioPrev(ob, obTxt, obBut){
    creEl('div', 'portfolioContain', main);
    let tmpApnd = document.getElementsByClassName('portfolioContain')[0];
    portfolioData.apnd = tmpApnd;
    portfolioText.apnd = tmpApnd;
    portfolioButton.apnd = tmpApnd;
    creEl(ob.type, ob.class, ob.apnd, '', ob.src);
    creEl(obTxt.type, obTxt.class, obTxt.apnd, obTxt.inHL);
    creEl(obBut.type, obBut.class, obBut.apnd, obBut.inHL);
    portfolioButton.target = document.getElementsByClassName(obBut.class)[0];
    opnPg(obBut.target, obBut.loc, true )
}


(function initIndex(){
    createIntro(introData);
    createPortfolioPrev(portfolioData, portfolioText, portfolioButton);
})()