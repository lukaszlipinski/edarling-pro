'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

//chrome.browserAction.setBadgeText({text: '\'Allo'});


chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if(request) {
		alert(request.data);
	}
});

