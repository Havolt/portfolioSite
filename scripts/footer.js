function addIcons(){

    //Icon container
    const iconContain = document.createElement('div');
    iconContain.classList.add('iconContain');
    foot.appendChild(iconContain);

    //gitHub icon
    const gitIcon = document.createElement('div');
    gitIcon.classList.add('footIcon', 'gitIcon');
    gitIcon.innerHTML = '<i class="fa fa-github"></i>';
    gitIcon.addEventListener('click', function(){
        window.open('https://github.com/Havolt');
    })
    iconContain.appendChild(gitIcon);

    //Twitter icon
    const twitterIcon = document.createElement('div');
    twitterIcon.classList.add('footIcon', 'twitterIcon');
    twitterIcon.innerHTML = '<i class="fa fa-twitter"></i>';
    twitterIcon.addEventListener('click', function(){
        window.open('http://twitter.com/jetsetfitz');
    })
    iconContain.appendChild(twitterIcon);

    //facebook icon
    const facebookIcon = document.createElement('div');
    facebookIcon.classList.add('footIcon', 'facebookIcon');
    facebookIcon.innerHTML = '<i class="fa fa-facebook"></i>';
    facebookIcon.addEventListener('click', function(){
        window.open('https://facebook.com/mark.fitzpatrick.545');
    })
    iconContain.appendChild(facebookIcon);
}

//Function that creates footer links 
function addLinks(){

    //Link Container
    const linkContain = document.createElement('div');
    linkContain.classList.add('linkContain');
    foot.appendChild(linkContain);

    //Link maker
    for(var i = 0; i < linkList.length; i++){
        const currLink = document.createElement('p');
        currLink.classList += 'footLink';
        if(currSection == linkList[i].toLowerCase()){
            currLink.classList.add('footLinkActive');
        }
        currLink.innerHTML = linkList[i];
        const tmpI = i;
        currLink.addEventListener('click', function(){
            if(linkList[tmpI] == 'Home'){
                window.open('index.html', '_self');
            }
            else{
                window.open(linkList[tmpI] + '.html', '_self');
            }
            
        })
        linkContain.appendChild(currLink);
    }
}

(function initFooter(){
    addIcons();
    addLinks();
})()