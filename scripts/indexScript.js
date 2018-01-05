
function homeBio(){
    console.log('zoom zoom');
    const bioText = "Hi, I'm Mark. I'm an Irish based front end web developer. I am skilled in HTML, CSS, JavaScript."

    const bioDiv = document.createElement('div');
    bioDiv.innerHTML= bioText;
    bioDiv.classList.add('bioDiv')
    main.appendChild(bioDiv);
}

(function initMain(){
    homeBio();
})()