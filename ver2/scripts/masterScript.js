
//Function used only for creation of base divs
function creBaseEl(elType, elID, appendee, innHTML, srce){
    const newSec = document.createElement(elType);
    newSec.id=elID;
    if(innHTML){newSec.innerHTML= innHTML;}
    if(srce){newSec.src = srce;}
    if(typeof(appendee) == 'string'){eval(appendee).appendChild(newSec);}
    else{appendee.appendChild(newSec);}
}

const sitePages = ['Home', 'Portfolio', 'About', 'Contact'];

//Array containing info for creBaseEl function
const baseInfo = [
    {type: 'div', id: 'site', appendee: document.body},
    {type: 'div', id: 'head', appendee: "document.getElementById('site')"},
    {type: 'div', id: 'main', appendee: "document.getElementById('site')"},
    {type: 'div', id: 'foot', appendee: "document.getElementById('site')"}]

//Function calls creBaseEl with information
function initBase(arr){
        creBaseEl(arr[0].type, arr[0].id, arr[0].appendee);
        for(var i = 1; i < baseInfo.length; i++){creBaseEl(arr[i].type, arr[i].id, arr[i].appendee);}
}

//Master function initiates everything
(function initMaster(){
    initBase(baseInfo)
})()