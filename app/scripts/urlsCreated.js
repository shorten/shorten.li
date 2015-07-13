(function(){
"use strict";

var span = document.getElementById("urls-created"),
    analyticsRequest = new XMLHttpRequest();

  function fetchAnalytics() {
    analyticsRequest.open('GET', 'https://shorten-li.appspot.com/query?id=agxzfnNob3J0ZW4tbGlyFQsSCEFwaVF1ZXJ5GICAgICAgIAKDA', true);

    analyticsRequest.onload = function() {
      if (analyticsRequest.status >= 200 && analyticsRequest.status < 400) {

        var urlsCreated = JSON.parse(analyticsRequest.responseText).rows[0][0];
        span.innerHTML = urlsCreated + ' links has been shortened since 07-13-2015';
      }
    };

    analyticsRequest.onerror = function() {
      // ;-;
    };

    analyticsRequest.send();
  }

  fetchAnalytics();
})();
