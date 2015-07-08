var form = document.getElementsByTagName('form')[0],
    urlInput = document.getElementsByTagName('input')[0],
    codeInput = document.getElementsByTagName('input')[1],
    clearButton = document.getElementsByClassName('clear')[0],
    submitButton = document.getElementsByTagName('input')[2],

    hashids = new Hashids("gistploy-url-shortener", 0, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"),
    timeRequest = new XMLHttpRequest(),
    hasValues, uniqueId, hashId, submitted;

    //localstorage
    urls = [],
    list = document.getElementById('list');


form.onsubmit = function(e) {
  e.preventDefault();
  e.stopPropagation();

  if(submitted) return reset();

  submitted = true;
  submitButton.setAttribute('disabled', 'true');
  submitButton.value = 'Generating url..';

  shorten.url(urlInput.value, function(err, shortenUrl) {
    var fullUrl = urlInput.value;

    submitButton.removeAttribute('disabled');
    submitButton.value = 'Done! Create another one?';

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
  var li = document.createElement("LI");
      span = a = document.createElement('span');
      a = document.createElement('a');

  span.innerHTML =  '  ('  + urlObject.full + ')';

  a.href = urlObject.short;
  a.innerHTML = urlObject.short.replace('http://git.io/', '');

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

clearButton.addEventListener('click', clearLocalStorage);

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
