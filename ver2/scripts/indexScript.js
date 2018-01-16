const currPage = sitePages[0];
const introData = [{inHL: 'Hi, I\'m Mark a Front-end Web Developer.', type: 'div', class: 'introMain'}, 
                    {inHL: 'Experienced with GitHub, HTML, CSS, JavaScript.', type: 'div', class: 'introSecond'}];

function createIntro(arr){
    console.log(introData)
    creEl('div', 'introContain', main);
    for(let i = 0; i < arr.length; i++){
        creEl(arr[i].type, arr[i].class, document.getElementsByClassName('introContain')[0], arr[i].inHL)
    }
}


(function initIndex(){
    createIntro(introData);
})()