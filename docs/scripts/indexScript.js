const currPage = sitePages[0];
const introData = [{inHL: 'Hi, I\'m Mark a Front-end Web Developer.', type: 'div', class: 'introMain'}, 
                    {inHL: 'Experienced with GitHub, HTML, CSS and JavaScript.', type: 'div', class: 'introSecond'}];
let portfolioData = {type: 'img', class: 'portfolioImg', src: "images/mountain.jpg" };
let portfolioText = {type: 'div', class: 'portfolioTxt', inHL: 'Interested in seeing my projects?' }
let portfolioButton = {type: 'div', class: 'portfolioButton', inHL: 'View Portfolio', loc : 'portfolio.html' };
const siteLinkText = {about: 'If you are interested in learning a little bit about my education and myself as a person then you should check out my about section.',
                    contact: 'If you wish to get in contact with me for potential JavaScript collaberations or other reasons then you should check out my contact section.' }
const mySiteContain = {type: 'div', class: 'pageLinkContain', apnd: main}
let mySiteLinks = [];

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

function createMySiteLinkData(containDivClass, iconHL, textHL, buttonLoc){
    let myArr = [];
    let myContain = {};
    myContain.type = 'div';
    myContain.class = ['pageLinkDiv'];
    myContain.class.push(containDivClass)
    myContain.apnd = 'pageLinkContain';
    myArr.push(myContain);
    mySiteLinks.push(myArr);

    //div with icon
    let myIcon = {};
    myIcon.type = 'div';
    myIcon.class = ['pageLinkIcon'];
    myIcon.class.push('pageLinkIcon'+ buttonLoc)
    myIcon.apnd = containDivClass;
    myIcon.inHL = iconHL;
    myArr.push(myIcon);
    //div with text
    let myText = {};
    myText.type = 'div';
    myText.class = 'pageLinkText';
    myText.apnd = containDivClass;
    myText.inHL = textHL;
    myArr.push(myText);
    //div with button
    let myButton = {};
    myButton.type = 'div';
    myButton.class = 'pageLinkButton';
    myButton.apnd = containDivClass;
    myButton.inHL = 'View '+ buttonLoc;
    myButton.isButton = true;
    myButton.loc = buttonLoc;
    myArr.push(myButton);
}

function createMySiteLink(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            creEl(arr[i][j].type, arr[i][j].class, document.getElementsByClassName(arr[i][j].apnd)[0], arr[i][j].inHL);
            if(arr[i][j].isButton){
                opnPg(document.getElementsByClassName('pageLinkButton')[i], arr[i][j].loc.toLowerCase()+'.html', true )
            }
        }
    }
}


(function initIndex(){
    createIntro(introData);
    createPortfolioPrev(portfolioData, portfolioText, portfolioButton);
    creEl(mySiteContain.type, mySiteContain.class, mySiteContain.apnd);
    createMySiteLinkData('pageLinkDivAbout','<i class="fa fa-user"></i>', siteLinkText.about , 'About');
    createMySiteLinkData('pageLinkDivContact','<i class="fa fa-envelope-o"></i>', siteLinkText.contact , 'Contact');
    createMySiteLink(mySiteLinks)
})()