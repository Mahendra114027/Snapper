var x = 'Data Recorded Successfully !';

var temp1=document.getElementsByClassName("js-startup_name")[0].innerHTML.trim();
var temp2=document.getElementsByClassName("js-startup_high_concept")[0].innerHTML.trim();
var temp3=document.getElementsByClassName("company-logo")[0].children[0].src;
var temp4=document.getElementsByClassName("company_url")[0].href;
var temp5=document.getElementsByClassName("js-location_tags")[0].children[0].innerHTML;

var product=[
{
	"title":temp1,
	"description":temp2,
	"image":temp3,
	"url":temp4,
	"location":temp5}
];


chrome.storage.sync.set({'pop_href': product}, function () {
			//alert('save pop_href successful');
});

chrome.runtime.sendMessage(x);
