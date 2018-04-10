// ==UserScript==
// @name         TemperMonkey reddit bypass 2018
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
var myURL = document.URL;

// test if current URL ends with a forward slash
var res0 = /\/$/g.test(myURL);

// If current URL doesn't end with forward slash, add forward slash.
if(!res0){
    myURL = myURL + "/";
}

/* For specified Reddit URL add new at the end of URL. e.g.
   e.g. reddit.com/r/nba/ -> reddit.com/r/nba/new
        reddit.com/r/nba/new -> "no change"
        reddit.com/r/nba/rising -> "no change"

   Regex URL expression modified from this stackoverflow question
   http://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
   Thanks to "foufos", http://stackoverflow.com/users/2604433/foufos
*/

//test for reddit URL
var res = /(http|https):\/\/www.reddit.com\/r\/([^\/\r\n]+)\/$/g.test(myURL);

// redirect to "new" subreddit section.
if(res) {
    window.location = myURL + "new";
}

})();
