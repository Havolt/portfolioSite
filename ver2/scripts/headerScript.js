
//Objects containing directions for builder functions
const headContainObj = {type: 'div', class: 'headContainer', apnd: head};
const headTitleObj = {type: 'div', class: 'headTitle', apnd: "document.getElementsByClassName('headContainer')[0]", inHL : "MF", hrf: 'index.html', onSelf: true };
const headBaseLinkObj = {type: 'ul', class: 'headLinkUl', apnd: "document.getElementsByClassName('headContainer')[0]"}
const headLinksObj = []

//Creates initial container div
function buildHead(ob){
    creEl(ob.type, ob.class, ob.apnd);
}

//creates header title and adds click event
function buildHeadTitle(ob){
    creEl(ob.type, ob.class, eval(ob.apnd), ob.inHL)
    opnPg(eval('document.getElementsByClassName(ob.class)[0]'), ob.hrf, ob.onSelf);
}

//creates list of links in header and adds click events
function buildHeadLinks(ob, ob2, linkClass){
    creEl(ob.type, ob.class, eval(ob.apnd));
    for(let i = 0; i < sitePages.length; i++){
        const newObj = new Object();
        newObj.type = 'li';
        if(currPage == sitePages[i]){newObj.class = ['headLinkLi', 'headLinkLiCurrent'];}
        else{newObj.class = 'headLinkLi';}
        newObj.apnd = "document.getElementsByClassName('headLinkUl')[0]";
        newObj.inHL = sitePages[i];
        if(sitePages[i] == 'Home'){newObj.hrf = 'index.html'}
        else{newObj.hrf = sitePages[i].toLowerCase() + '.html';}
        newObj.onSelf = true;
        ob2.push(newObj);
    }
    for(let i = 0; i < ob2.length; i++){
        creEl(ob2[i].type, ob2[i].class, eval(ob2[i].apnd), ob2[i].inHL);
        console.log(document.getElementsByClassName('headLinkLi')[i]);
        //opnPg(document.getElementsByClassName('headLinkLi')[i], ob2[i].hrf, ob2[i].onSelf)
        if(typeof(ob2[i].class) == 'string'){opnPg(document.getElementsByClassName(ob2[i].class)[i], ob2[i].hrf, ob2[i].onSelf)}
        else{opnPg(document.getElementsByClassName(ob2[i].class[0])[i], ob2[i].hrf, ob2[i].onSelf)}
    }
    
}




(function initHead(){
    buildHead(headContainObj);
    buildHeadTitle(headTitleObj);
    buildHeadLinks(headBaseLinkObj, headLinksObj, 'headLinkLi');
})()