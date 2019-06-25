/* eslint-disable no-undef */

//'use strict';



chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Mapper";
  var id = chrome.contextMenus.create({"title": title,
                                       "contexts":[context],
                                       "id": "context" + context});  
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
  var sText = info.selectionText;
  chrome.storage.sync.set({'Location': sText}, function() {
    // Notify that we saved.
    console.log('Location saved');
  });
  localStorage.setItem('Location', sText);
  var jax = new XMLHttpRequest();
  jax.open("POST","http://localhost:5000/server"); 
  jax.setRequestHeader("Content-Type","application/json");
  jax.send(JSON.stringify({"Location": sText}));
  jax.onreadystatechange = function() { 
    if(jax.readyState===4) { 
      alert(jax.responseText);
    }
  }
  // var axios = require('axios')

  // axios({
  //   method: 'POST',
  //   url: "/api/upload/background",
  //   data: {
  //     Location: sText
  //   },
  // })

  console.log(Location);
  
  // var cat = localStorage.getItem('Location')
  // console.log(cat);

  // var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);  
  // window.open(url, '_blank');
};
