let footIconData = [];
const iconContainData = {type: 'div', class: 'footIconContain', append: document.getElementById("foot")};
let footLinkData = [];

//Creates data for icon links
function fIconDataConstruct(cl, inHL, lnk){
    let tmpObjF = {};
    tmpObjF.type = 'div';
    tmpObjF.class = ['footIcon'];
    tmpObjF.class.push(cl);
    tmpObjF.append = eval('document.getElementsByClassName("footIconContain")[0]');
    tmpObjF.inHL = inHL;
    tmpObjF.num = footIconData.length;
    tmpObjF.link = lnk;
    footIconData.push(tmpObjF);
}

//Creates Icon Container
function createFootElement(ob){
    creEl(ob.type, ob.class, ob.append);
}

function createFootIcons(arr){
    for(let i = 0; i < arr.length; i++){
        creEl(arr[i].type, arr[i].class, arr[i].append, arr[i].inHL);
        opnPg(document.getElementsByClassName("footIcon")[i], arr[i].link, false);
    }
}

function createFootLinkData(arr){
    for(let i = 0; i < sitePages.length; i++){
        let tmpOb = {};
        tmpOb.type = 'li';
        tmpOb.inHL = sitePages[i];
        if(currPage == sitePages[i]){
            tmpOb.class = ['footLinkLi', 'footLinkLiCurrent'];
        }else{tmpOb.class = 'footLinkLi'}
        arr.push(tmpOb);
    }
}

function createFootLinks(arr){
    creEl('ul', 'footLinkUl', foot)
    for(let i = 0; i < arr.length; i++){
        creEl(arr[i].type, arr[i].class, document.getElementsByClassName('footLinkUl')[0], arr[i].inHL);
        if(typeof(arr[i].class) == 'string'){
            if(sitePages[i] == 'Home'){opnPg(document.getElementsByClassName(arr[i].class)[i], 'index.html', true)}
            else{opnPg(document.getElementsByClassName(arr[i].class)[i], sitePages[i].toLowerCase()+'.html', true)}
        }else{
            if(sitePages[i] == 'Home'){opnPg(document.getElementsByClassName(arr[i].class[0])[i], 'index.html', true)}
            else{opnPg(document.getElementsByClassName(arr[i].class[0])[i], sitePages[i].toLowerCase()+'.html', true)}
        }
    }
}

(function initFooter(){
    createFootElement(iconContainData);
    fIconDataConstruct('gitIcon', '<i class="fa fa-github"></i>', 'https://github.com/Havolt');
    fIconDataConstruct('twitterIcon', '<i class="fa fa-twitter"></i>', 'https://twitter.com/jetsetfitz');
    fIconDataConstruct('facebookIcon', '<i class="fa fa-facebook"></i>', 'https://www.facebook.com/mark.fitzpatrick.545');
    createFootIcons(footIconData);
    createFootLinkData(footLinkData);
    console.log(footLinkData)
    createFootLinks(footLinkData);
})()