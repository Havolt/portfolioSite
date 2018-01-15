let footIconData = [];
const iconContainData = {type: 'div', class: 'footIconContain', append: document.getElementById("foot")}

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

(function initFooter(){
    createFootElement(iconContainData);
    fIconDataConstruct('gitIcon', '<i class="fa fa-github"></i>', 'https://github.com/Havolt');
    fIconDataConstruct('twitterIcon', '<i class="fa fa-twitter"></i>', 'https://twitter.com/jetsetfitz');
    fIconDataConstruct('facebookIcon', '<i class="fa fa-facebook"></i>', 'https://www.facebook.com/mark.fitzpatrick.545');
    createFootIcons(footIconData);
})()