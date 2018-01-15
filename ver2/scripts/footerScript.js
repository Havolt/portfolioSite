let footIconData = [];
const iconContainData = {type: 'div', class: 'footIconContain', append: document.getElementById("foot")}

//Creates data for icon links
function fIconDataConstruct(cl, inHL){
    let tmpObjF = {};
    tmpObjF.type = 'div';
    tmpObjF.class = ['footIcon'];
    tmpObjF.class.push(cl);
    tmpObjF.append = eval('document.getElementsByClassName("footIconContain")[0]');
    tmpObjF.inHL = inHL;
    footIconData.push(tmpObjF);
}

//Creates Icon Container
function createFootElement(ob){
    creEl(ob.type, ob.class, ob.append);
}

function createFootIcons(arr){
    for(let i = 0; i < arr.length; i++){
        creEl(arr[i].type, arr[i].class, arr[i].append, arr[i].inHL);
    }
}

(function initFooter(){
    createFootElement(iconContainData);
    fIconDataConstruct('gitIcon', '<i class="fa fa-github"></i>');
    fIconDataConstruct('twitterIcon', '<i class="fa fa-twitter"></i>');
    fIconDataConstruct('facebookIcon', '<i class="fa fa-facebook"></i>');
    createFootIcons(footIconData);
})()