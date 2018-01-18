const currPage = sitePages[2];
let introData = [{type: 'div', class: 'introContain', apnd: 'aboutContain'},
                {type: 'img', class: 'introImg', apnd: 'introContain' , inHL: undefined, src: 'images/abtMe.jpg'},
                {type: 'div', class: 'introText', apnd: 'introContain', inHL: 'I am a Front-end Developer and graduated in 2010 with a degree in Multimedia. I have obtained a Font-end Web Development degree from freeCodeCamp in 2017. Over the past two years I have created multiple JavaScript projects which many of can be found in my portfolio.'}]



function createIntro(arr){
    for(let i = 0; i < introData.length; i++){
        creEl(arr[i].type, arr[i].class, document.getElementsByClassName(arr[i].apnd)[0], arr[i].inHL, arr[i].src)
    }
}


(function aboutInit(){
    creEl('div', 'aboutContain', main);
    createIntro(introData)
})()