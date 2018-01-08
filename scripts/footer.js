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

(function initFooter(){
    addIcons();
})()