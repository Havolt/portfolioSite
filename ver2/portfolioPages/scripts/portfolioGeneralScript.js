const currPage = sitePages[1];
subFolder = '../';

let testObj = {title: 'Checkers', desc: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}

function crePort(obj){
    creEl('div', 'portProjectContain', main);
    creEl('div', 'portProjectTitle', document.getElementsByClassName('portProjectContain')[0], obj.title)
    creEl('div', 'portProjectDesc', document.getElementsByClassName('portProjectContain')[0], obj.desc)
}

(function initportGen(){
    crePort(testObj)
})()