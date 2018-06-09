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

// GreaseMonkey code to bypass the "hot" section subreddits.
// Does not work for the main Reddit.com page.

// obtain Current URL
//var myURL = document.URL;
//var regTest = /http*:\/\/www.reddit.com\/*/g;

// test if current URL ends with a forward slash
//var res0 = regTest.test(myURL);

alert('res0');

// If current URL doesn't end with forward slash, add forward slash.
/*
if(res0){
    //myURL = myURL + "/";
}
*/

})();
