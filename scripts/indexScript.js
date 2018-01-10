
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


    const buttonList =[
        {title: 'About',
        icon: '<i class="fa fa-id-card"></i>',
        text: "If you are interested in learning a little bit about my education and myself as a person then you should check out my about section."},
        {title: 'Contact',
        icon: '<i class="fa fa-envelope"></i>',
        text: "If you wish to get in contact with me for potential JavaScript collaberations or other reasons then you should check out my contact section."}
    ]
    abtTextHTML = "If you are interested in learning a little bit about my education and myself as a person then you should check out my about section."

    for(var i = 0; i < buttonList.length; i++){
        console.log(i);
    //About Container
    const newHold = document.createElement('div');
    newHold.classList.add('homeAbtContain', 'homeContain');
    main.appendChild(newHold);

    //About Icon
    const newIcon = document.createElement('div');
    newIcon.classList.add('homeAbtIcon');
    newIcon.innerHTML = buttonList[i].icon;
    newHold.appendChild(newIcon);

    //About Title
    const newTitle = document.createElement('h2');
    newTitle.classList.add('homeAbtTitle');
    newTitle.innerHTML= buttonList[i].title +' Me';
    newHold.appendChild(newTitle);

    //About Text
    const newText = document.createElement('div');
    newText.innerHTML= buttonList[i].text;
    newText.classList.add('homeAbtText');
    newHold.appendChild(newText);



    //About & Contact Buttons
        const newButton = document.createElement('button');
        newButton.classList.add('homeAbtButton');
        newButton.innerHTML = 'View ' + buttonList[i].title;
        newButton.addEventListener('click', function(){
            window.open(buttonList[i].title.toLowerCase() + '.html', '_self');
        })
        newHold.appendChild(newButton);
    }

}

(function initMain(){
    homeBio();
    bigImg();
    abtSection();
})()