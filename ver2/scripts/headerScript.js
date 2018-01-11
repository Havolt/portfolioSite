
const headContainObj = {type: 'div', class: 'headContainer', apnd: head};
const headTitleObj = {type: 'div', class: 'headTitle', apnd: "document.getElementsByClassName('headContainer')[0]", inHL : "MF" };

function buildHead(ob){
    creEl(ob.type, ob.class, ob.apnd);
}

function buildHeadTitle(ob){
    creEl(ob.type, ob.class, eval(ob.apnd), ob.inHL)
}



(function initHead(){
    buildHead(headContainObj);
    buildHeadTitle(headTitleObj);
})()