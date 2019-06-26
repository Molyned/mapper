/* eslint-disable no-undef */

//'use strict';



chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Save to Map";
  var id = chrome.contextMenus.create({"title": title,
                                       "contexts":[context],
                                       "id": "context" + context});  
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
  //gets selected text
  var sText = info.selectionText;
  //saves selected text to local storage
  localStorage.setItem('Location', sText);
  //making an AJAX POST request to send sText as a json object to server
  var jax = new XMLHttpRequest();
  jax.open("POST","http://localhost:5000/server"); 
  jax.setRequestHeader("Content-Type","application/json");
  jax.send(JSON.stringify({"address": sText}));
  jax.onreadystatechange = function() { 
    if(jax.readyState===4) { 
      alert(jax.responseText);
    }
  }
};
