// ==UserScript==
// @name         Autodirect reddit sub to "New" section
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
var string = document.URL;

// check if URL ends with a forward slash
var expression0 = /\/$/g;
var res0 = expression0.test(string);

// If current URL doesn't end with forward slash, add forward slash.
if(!res0){
    string = string + "/";
}

/* For specified Reddit URL add new at the end of URL. e.g.
   e.g. reddit.com/r/nba/ -> reddit.com/r/nba/new
        reddit.com/r/nba/new -> "no change"
        reddit.com/r/nba/rising -> "no change"

   Regex URL expression modified from this stackoverflow question
   http://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
   Thanks to "foufos", http://stackoverflow.com/users/2604433/foufos
*/

var expression = /(http|https):\/\/www.reddit.com\/r\/([^\/\r\n]+)\/$/g;
var res = expression.test(string);

// redirect to "new" section subreddit.
if(res) {
    var newSite = string + "new";
    window.location = newSite;
} 
})();
