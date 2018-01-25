function creEl(elType, elClass, appendee, innHTML, srce,){
    const newSec = document.createElement(elType);
    if(typeof(elClass) == 'string'){newSec.classList.add(elClass);}
    else{
        for(var i = 0; i < elClass.length; i++){newSec.classList.add(elClass[i])};}
    if(innHTML){newSec.innerHTML= innHTML;}
    if(srce){newSec.src = srce;}
    appendee.appendChild(newSec);
}

function opnPg(targetEl, location, onSelf){
    targetEl.addEventListener('click', function(){
        if(onSelf){winOp = '_self'}else{winOp = '_blank'}
        window.open(location, winOp);
    })
}