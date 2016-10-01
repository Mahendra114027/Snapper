
document.addEventListener('DOMContentLoaded', function() {
var newdata;
chrome.storage.sync.get('pop_href', function (data) {
	newdata=data.pop_href;

	
	document.getElementById('log').src=newdata[0].image;
	document.getElementById('name').innerHTML=newdata[0].title;
	document.getElementById('desc').innerHTML=newdata[0].description;
	document.getElementById('url').href=newdata[0].url;
	document.getElementById('loc').innerHTML=newdata[0].location;
	document.getElementById('loc').children[0].target="_blank";	

});

var btn=document.getElementById('postButton');
btn.addEventListener('click',function()
  {
	var url = "http://app.crowdproduct.com/api/product";
	var method = "POST";
	var postData =JSON.stringify(newdata);
	console.log(postData.toString());
	/* {"body":[
		{"title":},
		{"description":},
		{"image":},
		{"url":},
		{"location":}
	]	
	}
	"; */

	
	var async = true;

	var request = new XMLHttpRequest();

	
	request.onload = function () {

	   var status = request.status;
	   var data = request.responseText; 
	}

	request.open(method, url, async); 

	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	
	request.send(postData);
	console.log(request.responseText);
	  
  });

});