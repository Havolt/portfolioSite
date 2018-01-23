const currPage = sitePages[1];
subFolder = '../';


function crePort(obj){
    creEl('div', 'portProjectContain', main);
    creEl('div', 'portProjectTitle', document.getElementsByClassName('portProjectContain')[0], obj.title);
    creEl('div', 'portProjectDesc', document.getElementsByClassName('portProjectContain')[0], obj.desc);
    creEl('div', 'portProjectApp', document.getElementsByClassName('portProjectContain')[0]);
    initApp(document.getElementsByClassName('portProjectApp'));
}

(function initportGen(){
    crePort(portProjectData);
})()