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
                {type: 'li', class: 'overviewLi', apnd: 'overviewUl', inHL: 'GitHub'}];
let skillsData = [{type: 'div', class: 'skillsContain', apnd: 'aboutContain'},
                {type: 'div', class: 'aboutHeader', apnd: 'skillsContain', inHL: 'Skills'},
                {type: 'div', class: 'skillsText', apnd: 'skillsContain', inHL: 'I have many years of education in front-end web development, creating high quality responsive sites. My work is highly interactive due to my extensive knowledge of JavaScript.'},
                {type: 'div', class: 'skillsText', apnd: 'skillsContain', inHL: 'In my degree I learned the fundamentals of website design. This included ways to retain user attention and create websites which draw the users eye to important details. I have also self thought myself further important front-end aspects such as complex JavaScript and creating my own responsive sites with and without the use of frameworks.'},
                {type: 'div', class: 'skillsText', apnd: 'skillsContain', inHL: 'In my degree I also learned to use multiple graphic design applications such as Photoshop and Flash. My time in college and work experience since has helped me develop strong skills in time and project management. '}]
let locData = [{type: 'div', class: 'locContain', apnd: 'aboutContain'},
            {type: 'div', class: 'aboutHeader', apnd: 'locContain', inHL: 'Location'},
            {type: 'div', class: 'locText', apnd: 'locContain', inHL: 'I am currently based in Ireland near Dublin. However I am more than open to working anywhere within Ireland or the United Kingdom and have previously worked abroad in Manchester in 2015.'},
            {type: 'img', class: 'locPic', apnd: 'locContain', inHL: undefined, src: 'images/about/isles.jpg'}]
let contactData = [{type: 'div', class: 'contactContain', apnd: 'aboutContain'},
                {type: 'div', class: 'aboutHeader', apnd: 'contactContain', inHL: 'Contact'},
                {type: 'div', class: 'contactText', apnd: 'contactContain', inHL: 'If you wish to get in contact with me for possible projects or for offers of emplyment please find the relevant information in the contact section linked below.'},
                {type: 'div', class: 'contactButton', apnd: 'contactContain', inHL: 'View Contact Section', isButton: true, loc: 'contact'}]

function createIntro(arr){
    for(let i = 0; i < arr.length; i++){
        creEl(arr[i].type, arr[i].class, document.getElementsByClassName(arr[i].apnd)[0], arr[i].inHL, arr[i].src)
    }
}

function createSection(arr){
    for(let i = 0; i < arr.length; i++){
        creEl(arr[i].type, arr[i].class, document.getElementsByClassName(arr[i].apnd)[0], arr[i].inHL, arr[i].src);
        if(arr[i].isButton){opnPg(document.getElementsByClassName(arr[i].class)[0], arr[i].loc + '.html', true )}
    }
}


(function aboutInit(){
    creEl('div', 'aboutContain', main);
    createIntro(introData)
    createSection(overviewData);
    createSection(skillsData);
    createSection(locData);
    createSection(contactData);
})()