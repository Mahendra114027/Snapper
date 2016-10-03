/* x is used to alert user the data is recoreded/scrapped */
var x = 'Data Recorded Successfully !';


/* These variables store the various required attributes */


var temp=document.getElementsByClassName("company-logo")[0].children[0].src;
var temp2=document.getElementsByClassName("js-startup_name")[0].innerHTML.trim();
var temp3=document.getElementsByClassName("js-startup_high_concept")[0].innerHTML.trim();
var temp4=document.getElementsByClassName("js-location_tags")[0].innerHTML.trim();
var temp5=document.getElementsByClassName("company_url")[0].href;
var temp6="AngelList";
var body={"title":temp2,"description":temp3,"image":temp,"url":temp5,"location":temp4,"source":temp6};


/* This sets all attributes in chrome storage */
chrome.storage.sync.set({'pop_href': body}, function () {
			//alert('save pop_href successful');
});

/* Passing message to background.js */
chrome.runtime.sendMessage(x);
