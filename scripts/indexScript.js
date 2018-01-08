
function homeBio(){
    const bioText = "Hi, I'm Mark. I'm an Irish based front end web developer. I am skilled in HTML, CSS, JavaScript."

    const bioDiv = document.createElement('div');
    bioDiv.innerHTML= bioText;
    bioDiv.classList.add('bioDiv')
    main.appendChild(bioDiv);
}

function bigImg(){
    const myImg = document.createElement('img');
    myImg.classList.add('homeMainImg');
    myImg.src="images/mountain.jpg";
    main.appendChild(myImg);
}

(function initMain(){
    homeBio();
    bigImg();
})()