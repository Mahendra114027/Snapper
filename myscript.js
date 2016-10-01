var x = 'Data Recorded Successfully !';

var temp1=document.getElementsByClassName("company-logo")[0].children[0].src;
var temp2=document.getElementsByClassName("js-startup_name")[0].innerHTML.trim();
var temp3=document.getElementsByClassName("js-startup_high_concept")[0].innerHTML.trim();
var temp4=document.getElementsByClassName("js-location_tags")[0].innerHTML.trim();
var temp5=document.getElementsByClassName("company_url")[0].href;
var body=[{"title":temp2,"description":temp3,"image":temp1,"url":temp5,"location":temp4}];


chrome.storage.sync.set({'pop_href': body}, function () {
			//alert('save pop_href successful');
});

chrome.runtime.sendMessage(x);
