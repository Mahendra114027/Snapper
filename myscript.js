/* x is used to alert user the data is recoreded/scrapped */
var x = 'Data Recorded Successfully !';


/* These variables store the various required attributes */


/* Name */
var temp1=document.getElementsByClassName("js-startup_name")[0].innerHTML.trim();
/* Description */
var temp2=document.getElementsByClassName("js-startup_high_concept")[0].innerHTML.trim();
/* Image or logo */
var temp3=document.getElementsByClassName("company-logo")[0].children[0].src;
/* Company website */
var temp4=document.getElementsByClassName("company_url")[0].href;
/* Location */
var temp5=document.getElementsByClassName("js-location_tags")[0].children[0].innerHTML;


/* product is used to show scrapped details on the plugin page */
var product=[
{
	"title":temp1,
	"description":temp2,
	"image":temp3,
	"url":temp4,
	"location":temp5}
];

/* This sets all attributes in chrome storage */
chrome.storage.sync.set({'pop_href': product}, function () {
			//alert('save pop_href successful');
});

/* Passing message to background.js */
chrome.runtime.sendMessage(x);
