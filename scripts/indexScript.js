
function homeBio(){
    const bioText = "Hi, I'm Mark. I'm an Irish based front end web developer. I am skilled in HTML, CSS, JavaScript."

    const bioDiv = document.createElement('div');
    bioDiv.innerHTML= bioText;
    bioDiv.classList.add('bioDiv')
    main.appendChild(bioDiv);
}

function bigImg(){
    //Image container
    const imgHold = document.createElement('div');
    imgHold.classList.add('homeMainImgContain', 'homeContain');
    main.appendChild(imgHold);

    //Main Image
    const myImg = document.createElement('img');
    myImg.classList.add('homeMainImg');
    myImg.src="images/mountain.jpg";
    imgHold.appendChild(myImg);

    //Image Text
    const imgTxt = document.createElement('h2');
    imgTxt.classList.add('homeMainImgTxt');
    imgTxt.innerHTML="Interested in seeing my projects?"
    imgHold.appendChild(imgTxt);

    //Image Portfolio Button
    const imgButton = document.createElement('button');
    imgButton.classList.add('homeMainImgButton');
    imgButton.innerHTML='View Portfolio';
    imgButton.addEventListener('click', function(){
        window.open('portfolio.html', '_self');
    })
    imgHold.appendChild(imgButton);

}

function abtSection(){

    abtTextHTML = "If you are interested in learning a little bit about my education and myself as a person then you should check out my about section."

    //About Container
    const abtHold = document.createElement('div');
    abtHold.classList.add('homeAbtContain', 'homeContain');
    main.appendChild(abtHold);

    //About Icon
    const abtIcon = document.createElement('div');
    abtIcon.classList.add('homeAbtIcon');
    abtIcon.innerHTML = '<i class="fa fa-id-card"></i>'
    abtHold.appendChild(abtIcon);

    //About Title
    const abtTitle = document.createElement('h2');
    abtTitle.classList.add('homeAbtTitle');
    abtTitle.innerHTML= 'About Me';
    abtHold.appendChild(abtTitle);

    //About Text
    const abtText = document.createElement('div');
    abtText.innerHTML= abtTextHTML;
    abtText.classList.add('homeAbtText');
    abtHold.appendChild(abtText);

    //About Button
    const abtButton = document.createElement('button');
    abtButton.classList.add('homeAbtButton');
    abtButton.innerHTML = 'View About';
    abtButton.addEventListener('click', function(){
        window.open('about.html', '_self');
    })
    abtHold.appendChild(abtButton);
}

(function initMain(){
    homeBio();
    bigImg();
    abtSection();
})()