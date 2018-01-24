
//Objects containing directions for builder functions
const headContainObj = {type: 'div', class: 'headContainer', apnd: head};
const headTitleObj = {type: 'div', class: 'headTitle', apnd: "document.getElementsByClassName('headContainer')[0]", inHL : "MF", hrf: 'index.html', onSelf: true };
const headBaseLinkObj = {type: 'ul', class: 'headLinkUl', apnd: "document.getElementsByClassName('headContainer')[0]"}
let headLinksObj = []
const headNavBut = {type: 'div', class: 'headNavButton', apnd: "document.getElementsByClassName('headContainer')[0]", inHL: '&#9776;' }

//Creates initial container div
function buildHead(ob){
    creEl(ob.type, ob.class, ob.apnd);
}

//creates header title and adds click event
function buildHeadEl(ob){
    creEl(ob.type, ob.class, eval(ob.apnd), ob.inHL);
    opnPg(eval('document.getElementsByClassName(ob.class)[0]'), subFolder + ob.hrf, ob.onSelf);
}

//Creates Navigation Button for mobile
function buildNavButton(ob){
    creEl(ob.type, ob.class, eval(ob.apnd), ob.inHL);
    document.getElementsByClassName(ob.class)[0].addEventListener('click', function(){
        for(let i = 0; i < headLinksObj.length; i++){
            let navOn = false;
            
            for(let j = 0; j < document.getElementsByClassName('headLinkLi')[i].classList.length; j++){
                if(document.getElementsByClassName('headLinkLi')[i].classList[j] == 'headLinkNav'){ navOn = true;}
            }
            if(!navOn){document.getElementsByClassName('headLinkLi')[i].classList.add('headLinkNav');
            }else{document.getElementsByClassName('headLinkLi')[i].classList.remove('headLinkNav')}
            
        }
        let headNavOn = false;
        for(let j = 0; j < document.getElementById('head').classList.length; j++){
            if(document.getElementById('head').classList[j] == 'headNav'){headNavOn = true}
        }
        if(!headNavOn){document.getElementById('head').classList.add('headNav');
            }else{document.getElementById('head').classList.remove('headNav')}
    })
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
        if(sitePages[i] == 'Home'){newObj.hrf = subFolder + 'index.html'}
        else{newObj.hrf =  subFolder + sitePages[i].toLowerCase() + '.html';}
        newObj.onSelf = true;
        ob2.push(newObj);
    }
    for(let i = 0; i < ob2.length; i++){
        creEl(ob2[i].type, ob2[i].class, eval(ob2[i].apnd), ob2[i].inHL);
        //opnPg(document.getElementsByClassName('headLinkLi')[i], ob2[i].hrf, ob2[i].onSelf)
        if(typeof(ob2[i].class) == 'string'){opnPg(document.getElementsByClassName(ob2[i].class)[i], ob2[i].hrf, ob2[i].onSelf)}
        else{opnPg(document.getElementsByClassName(ob2[i].class[0])[i], ob2[i].hrf, ob2[i].onSelf)}
    } 
}





(function initHead(){
    buildHead(headContainObj);
    buildHeadEl(headTitleObj);
    buildNavButton(headNavBut);
    buildHeadLinks(headBaseLinkObj, headLinksObj, 'headLinkLi');
})()