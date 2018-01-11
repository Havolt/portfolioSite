function creEl(elType, elClass, appendee, innHTML, srce){
    const newSec = document.createElement(elType);
    if(typeof(elClass) == 'string'){
        console.log('foo');
    }
    newSec.classList.add(elClass);
    if(innHTML){newSec.innerHTML= innHTML;}
    if(srce){newSec.src = srce;}
    appendee.appendChild(newSec);
}