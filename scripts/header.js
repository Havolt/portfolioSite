const site = document.getElementById('site');
const head = document.getElementById('head');
const linkList = ['Home', 'Portfolio', 'About', 'Contact']

function createHead(){
    //Header Container
    const headDiv = document.createElement('div');
    headDiv.id="siteHead";
    head.appendChild(headDiv);
    //Head Logo
    const headLogo = document.createElement('div');
    headLogo.id = "siteHeadLogo";
    headLogo.innerHTML="MF";
    headDiv.appendChild(headLogo);
    //Head Links
    const headLinks = document.createElement('ul');
    headLinks.id="siteHeadLinks";
    for(var i = 0; i < linkList.length; i++){
        const tempList = document.createElement('li');
        //Adds border bottom effect to current section user is in
        if(linkList[i].toLocaleLowerCase() == currSection){
            tempList.classList += 'siteHeadLinksCurrent';
            
        }
        const intSave = i;
        //Adds event listner to links to open new pages
        tempList.addEventListener('click', function(){evtAdd(intSave)})
        //Creates link data
        function evtAdd(itm){
            if(linkList[intSave] == 'Home'){
                window.open('index.html', '_self');
            }else{
                window.open(linkList[intSave].toLowerCase() + '.html', '_self');
            }
        }
        tempList.innerHTML = linkList[i];
        headLinks.appendChild(tempList);
    }
    headDiv.appendChild(headLinks);
    //NavButton
    const navButton = document.createElement('div');
    navButton.id= "siteHeadNav";
    navButton.innerHTML = '	&#9776';
    headDiv.appendChild(navButton);
}



(function initHeader(){
    createHead()
})()