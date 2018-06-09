// ==UserScript==
// @name         New Userscript
// @namespace    http*://www.reddit.com/*
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var myURL = document.URL;
myURL = myURL.replace("www", "old");

window.location = myURL;

})();
