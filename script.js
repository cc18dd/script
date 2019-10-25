// ==UserScript==
// @name           Photopea
// @namespace      www.photopea.com
// @description    Photopea without ads
// @include        https://www.photopea.com/
// @version        1.1
// ==/UserScript==

window.onload = setTimeout(function(){
  function waitForFnc(){
    var account = document.getElementsByClassName('fitem bbtn');
    var adsBar = document.getElementsByClassName('rightmost');
    var area = document.getElementsByClassName('panelblock mainblock');
    if(typeof account[0] != "undefined" &&
       typeof adsBar[0] != "undefined" &&
       typeof area[0] != "undefined"){
      removeAds();
    }
    else{
      window.setTimeout(waitForFnc,50);
    }
  }

  function removeAds(){
    // remove ads bar
    var adsBar = document.getElementsByClassName('rightmost');
    for (var l = 0; l < adsBar.length; l++) {
      var ads = adsBar[l];
      console.log(ads);
      ads.remove();
    }
    // expand document area
    var mainblock = document.getElementsByClassName('mainblock');
    mainblock[0].style.width = '100%';
    var panelhead = document.getElementsByClassName('panelhead');
    panelhead[0].style.maxWidth = '100%';
    panelhead[0].nextSibling.style.width = '100%';
    // unify color for links
    var account = document.getElementsByClassName('fitem bbtn');
    account[0].remove();
    var links = document.getElementsByClassName('topfloat');
    for (var i = 0; i < links.length; i++) {
      var a = links[i].getElementsByTagName('a');
      for (var j = 0; j < a.length; j++) {
        var elem = a[j];
        elem.style.backgroundColor = 'var(--bg-bbtn)';
      }
    }
  }
  waitForFnc();
});
