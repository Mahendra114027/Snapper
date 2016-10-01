/* This JavaScript is used to show alerts for various processes going in Background */
chrome.runtime.onMessage.addListener(function(msg,sender,reply)
{

	alert(msg);
	
}); 
