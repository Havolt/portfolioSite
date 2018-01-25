let portProjectData = new Object;

function projectDataInfo(title, app, desc){
    portProjectData.title = title;
    portProjectData.app = app;
    portProjectData.desc = desc;
}


/////App data goes below here


let searchBar;
let searchButton;
let listContainer;
let prevSearch = false;
let tempResponse;
let listItemClass;
let firstTime = true;
let randomButton;

function ajax(term){
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchBar.value + '&prop=info&inprop=url&utf8=&format=json',

    dataType: 'jsonp',
    success: function(response){
      tempResponse = response;
      makeList(response);
      listItemClass= document.getElementsByClassName('listItemClass');
      listContainer = document.getElementById('listContainer');
      makeLinks();

    },
    error: function(){
      alert('Failure');
    }
  })
}

function makeList(response){
  if(prevSearch){
    listContainer.innerHTML = "";
    listContainer.remove();
    prevSearch = false;
  }
  if(!prevSearch){
    const listContain = document.createElement('div');
    listContain.id = "listContainer";
    app.appendChild(listContain);
    for(var i = 0; i < response.query.search.length; i++){
      const listItem = document.createElement('div');
      listItem.classList="listItemClass";
      listContain.appendChild(listItem);
      const lTitle = document.createElement('h3');
      lTitle.innerHTML = response.query.search[i].title;
      listItem.appendChild(lTitle);
      const lDesc = document.createElement('p');
      lDesc.innerHTML = response.query.search[i].snippet;
      listItem.appendChild(lDesc);
      prevSearch = true;
    }
  }
}

function makeLinks(){

  for(var i = 0; i < listItemClass.length; i++){
    (function(i) {
      listItemClass[i].addEventListener('click', function(){
        window.open('https://en.wikipedia.org/wiki/' + listItemClass[i].childNodes[0].textContent);
        });

    }(i))

  }
}

function openRandom(){
  window.open('https://en.wikipedia.org/wiki/Special:Random');
}

function createSearch(){
  const randomSearch = document.createElement('button');
  randomSearch.id = "randomButton";
  randomSearch.innerHTML= "Click Here for a Random Article";
  app.appendChild(randomSearch);
  const searchContain = document.createElement('div');
  searchContain.id = "searchContainer"
  app.appendChild(searchContain);

  const searchB = document.createElement('input');
  searchB.id = "searchBar"
  searchContain.appendChild(searchB);
  const searchButt = document.createElement('button');
  searchButt.innerHTML = "<i class='fa fa-search'></i>";
  searchButt.id = "searchButton";
  searchContain.appendChild(searchButt);

}

function idAssign(){
  searchBar = document.getElementById('searchBar');
  searchButton = document.getElementById('searchButton');
  randomButton = document.getElementById('randomButton');
}

function initApp(){
  createSearch();
  idAssign();
  searchButton.addEventListener('click', ajax);
  randomButton.addEventListener('click', openRandom);
  searchBar.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
      ajax();
    }
  });
};
  
  
  /////App data goes above here
  
  (function initProjectData(){
      projectDataInfo('Wikipedia Search', initApp, 'Wikipedia search Engine which brings back the most relevant articles through the use of the Wikipedia API. There is also a random article feature.');
  })()