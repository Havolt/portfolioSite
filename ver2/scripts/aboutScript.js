const currPage = sitePages[2];
let introData = [{type: 'div', class: 'introContain', apnd: 'aboutContain'},
                {type: 'img', class: 'introImg', apnd: 'introContain' , inHL: undefined, src: 'images/abtMe.jpg'},
                {type: 'div', class: 'introText', apnd: 'introContain', inHL: 'I am a Front-end Developer and graduated in 2010 with a degree in Multimedia. I have obtained a Font-end Web Development degree from freeCodeCamp in 2017. Over the past two years I have created multiple JavaScript projects which many of can be found in my portfolio.'}]
let overviewData = [{type: 'div', class: 'overviewContain', apnd: 'aboutContain'},
                {type: 'div', class: 'aboutHeader', apnd: 'overviewContain', inHL: 'Outline'},
                {type: 'div', class: 'overviewIntro', apnd: 'overviewContain', inHL: 'The work I provide is high quality and fully responsive. I have a large knowlege of no just how to create user-friendly webistes but also designs which are aesthetically pleasing. A brief overview of some ofthe skills I can provide are as follows;'},
                {type: 'ul', class: 'overviewUl', apnd: 'overviewContain'},
                {type: 'li', class: 'overviewLi', apnd: 'overviewUl', inHL: 'HTML'},
                {type: 'li', class: 'overviewLi', apnd: 'overviewUl', inHL: 'CSS'},
                {type: 'li', class: 'overviewLi', apnd: 'overviewUl', inHL: 'JavaScript'},
                {type: 'li', class: 'overviewLi', apnd: 'overviewUl', inHL: 'jQuery'},
                {type: 'li', class: 'overviewLi', apnd: 'overviewUl', inHL: 'APIs and Ajax'},
                {type: 'li', class: 'overviewLi', apnd: 'overviewUl', inHL: 'Functional Programming'},
                {type: 'li', class: 'overviewLi', apnd: 'overviewUl', inHL: 'Photoshop'},
                {type: 'li', class: 'overviewLi', apnd: 'overviewUl', inHL: 'Flash'}];
let skillsData = [{type: 'div', class: 'skillsContain', apnd: 'aboutContain'},
                {type: 'div', class: 'aboutHeader', apnd: 'skillsContain', inHL: 'Skills'}]


function createIntro(arr){
    for(let i = 0; i < arr.length; i++){
        creEl(arr[i].type, arr[i].class, document.getElementsByClassName(arr[i].apnd)[0], arr[i].inHL, arr[i].src)
    }
}

function createSection(arr){
    for(let i = 0; i < overviewData.length; i++){
        creEl(arr[i].type, arr[i].class, document.getElementsByClassName(arr[i].apnd)[0], arr[i].inHL);
    }
}


(function aboutInit(){
    creEl('div', 'aboutContain', main);
    createIntro(introData)
    createSection(overviewData);
    createSection(skillsData);
})()