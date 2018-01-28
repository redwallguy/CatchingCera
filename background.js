chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({"url": "ceraSettings.html"});
});

chrome.runtime.onInstalled.addListener(function(details) {
   chrome.storage.local.set({"ceraPercent": 69,"ceraSize": 5,"ceraTime": 10,
       "ceraTimesFound":0, "ceraTimesSpawned": 0, "ceraTimeTotal": 0}); 
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.Givecera == "GIVE") {
        sendResponse({"ceraPic": chrome.runtime.getURL("ceraBadge.png")});
    }
});