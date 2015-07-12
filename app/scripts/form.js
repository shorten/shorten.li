(function(){
"use strict";

var form = document.getElementById("form"),
    urlInput = form.children[0],
    //clearButton = document.getElementsByClassName('clear')[0],
    submitButton = form.children[1],
    submitted,
    urls = [],
    list = document.getElementById('list');


form.onsubmit = function(e) {
  e.preventDefault();
  e.stopPropagation();

  if(submitted) return reset();

  submitted = true;
  submitButton.setAttribute('disabled', 'true');
  submitButton.value = 'Generating url..';
  console.log(urlInput.value);
  shorten.url(urlInput.value, function(err, shortenUrl) {
    var fullUrl = urlInput.value;

    if(err){
      ga('send', 'event', 'shorten', 'create', 'error', fullUrl);
    }

    ga('send', 'event', 'shorten', 'create', 'success', fullUrl);

    submitButton.removeAttribute('disabled');
    submitButton.value = 'create more?';

    urlInput.value = shortenUrl;
    urlInput.select();

    addToLocalStorage(fullUrl, urlInput.value);

  })


};

function addToLocalStorage(fullUrl, shortUrl) {
  var urlObject = {'full':fullUrl, 'short':shortUrl};
  urls.push(urlObject);

  localStorage.setItem('urls', JSON.stringify(urls));

  addUrlToList(urlObject);
}

function addUrlToList(urlObject) {
  var li = document.createElement("LI"),
      span = document.createElement('span'),
      a = document.createElement('a');

  span.innerHTML =  urlObject.full;

  a.href = urlObject.short;
  a.innerHTML = urlObject.short;

  li.appendChild(a);
  li.appendChild(span);

  list.insertBefore(li, list.firstChild);
}

function loadFromLocalStorage() {
  urls = JSON.parse(localStorage.getItem('urls')) || [];

  if(!urls || urls.length === 0) return;

  urls.map(function(url) {
    addUrlToList(url);
  });

}

function clearLocalStorage() {
  urls.length = 0;
  list.innerHTML = '';
  localStorage.clear();
}

// clearButton.addEventListener('click', clearLocalStorage);

function reset() {
  submitButton.value = 'Shorten';

  urlInput.value = "";
  urlInput.select();
  submitted = false;
}

function init() {
  loadFromLocalStorage();
}

init();

})();