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
}

(function initFooter(){
    addIcons();
})()