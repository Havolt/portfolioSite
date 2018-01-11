function creEl(elType, elClass, appendee, innHTML, srce){
    const newSec = document.createElement(elType);
    newSec.classList.add(elClass);
    if(innHTML){newSec.innerHTML= innHTML;}
    if(srce){newSec.src = srce;}
    appendee.appendChild(newSec);
}

function aboutOpening(){

    creEl('div', 'abtOpenContain', main);
    creEl('img', 'abtMePic', document.getElementsByClassName('abtOpenContain')[0], undefined, 'images/abtMe.jpg');
    creEl('div', 'abtOpenText', document.getElementsByClassName('abtOpenContain')[0], 'Hello' )

}

(function initAbout(){
    console.log('foo')
    aboutOpening();
})()