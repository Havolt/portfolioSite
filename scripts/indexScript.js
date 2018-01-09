
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
    imgHold.classList.add('homeMainImgContain');
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

(function initMain(){
    homeBio();
    bigImg();
})()