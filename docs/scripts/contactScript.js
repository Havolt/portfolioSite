const currPage = sitePages[3];

const contactMainData = [{type: 'div', class: 'contactImgContainer', apnd: 'contactContainer'},
                        {type: 'img', class: 'contactMainImg', apnd: 'contactImgContainer', inHL: 'undefined', src: 'images/contact/rope-island.jpg'},
                        {type: 'div', class: 'contactMainTitle', apnd: 'contactImgContainer', inHL: 'Get in touch'},
                        {type: 'div', class: 'contactMainText', apnd: 'contactImgContainer', inHL: 'I am currently looking for new opportunities of employment. If you have a position you feel I would be a good fit for or have an inquiry please send me an email below:'},
                        {type: 'div', class: 'contactMainButton', apnd: 'contactImgContainer', inHL: 'Send an Email', isBtn: true, hrf: 'mailto:markfitz815@gmail.com', onSelf: true}]

function createContactSection(arr){
    console.log(arr.length)
    for(let i = 0; i < arr.length; i++){
        creEl(arr[i].type, arr[i].class, document.getElementsByClassName(arr[i].apnd)[0], arr[i].inHL, arr[i].src);
        if(arr[i].isBtn){
            opnPg(document.getElementsByClassName(arr[i].class)[0], arr[i].hrf, arr[i].onSelf);
        }
    }
}

(function initContact(){
    creEl('div', 'contactContainer', main)
    createContactSection(contactMainData);
})()