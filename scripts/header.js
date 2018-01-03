const site = document.getElementById('site');
const head = document.getElementById('head');

function createHead(){
    console.log('heading');
    const headDiv = document.createElement('div');
    headDiv.id="siteHead";
    head.appendChild(headDiv);

    const headLogo = document.createElement('div');
    headLogo.id = "siteHeadLogo";
    headLogo.innerHTML="MF";
    headDiv.appendChild(headLogo);

}


(function initHeader(){
    createHead()
})()