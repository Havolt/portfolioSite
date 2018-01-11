
const headContainObj = {type: 'div', class: 'headContainer', apnd: head};
const headTitleObj = {type: 'div', class: 'headTitle', apnd: "document.getElementsByClassName('headContainer')[0]", inHL : "MF", hrf: 'index.html', onSelf: true };

function buildHead(ob){
    creEl(ob.type, ob.class, ob.apnd);
}

function buildHeadTitle(ob){
    creEl(ob.type, ob.class, eval(ob.apnd), ob.inHL)
    opnPg(eval('document.getElementsByClassName(ob.class)[0]'), ob.hrf, ob.onSelf);
}



(function initHead(){
    buildHead(headContainObj);
    buildHeadTitle(headTitleObj);
})()