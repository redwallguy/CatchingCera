chrome.storage.local.get(["ceraPercent","ceraSize","ceraTime",
        "ceraTimesSpawned","ceraTimesFound", "ceraTimeTotal"], function(result) {
    var ceraPercent,ceraSize,ceraTime,ceraTimesSpawned,
    ceraTimesFound,ceraTimeTotal;

    ceraPercent = result.ceraPercent;
    ceraSize = result.ceraSize;
    ceraTime = result.ceraTime;
    ceraTimesSpawned = result.ceraTimesSpawned;
    ceraTimesFound = result.ceraTimesFound;
    ceraTimeTotal = result.ceraTimeTotal;

    if ((Math.random() * 100) < ceraPercent) {
        chrome.runtime.sendMessage({"Givecera": "GIVE"}, function(response) {
            chrome.storage.local.set({"ceraTimesSpawned": ceraTimesSpawned + 1});

            var ceraH = Math.floor(Math.random()* ($(window).height() - ceraSize));
            var ceraW = Math.floor(Math.random()* ($(window).height() - ceraSize));

            $("body").append("<div id='CERA'></div>");
            $("#CERA").css("width",""+ceraSize+"px");
            $("#CERA").css("height",""+ceraSize+"px");
            $("#CERA").css("backgroundImage", "url(" + response.ceraPic + ")");
            $("#CERA").css("background-size", "cover");
            $("#CERA").css("position","absolute");
            $("#CERA").css("z-index", 9999);
            $("#CERA").css("top", ""+ceraH+"px");
            $("#CERA").css("left", ""+ceraW+"px");

            d = Date.now();
            var ceraTimeout = setTimeout(deleteCera, ceraTime*1000);

            function deleteCera() {
                $("#CERA").remove();
                chrome.storage.local.set({"ceraTimeTotal": ceraTimeTotal+15});
                alert("Cera escaped...");
            }

            $("#CERA").click(function(){
                clearTimeout(ceraTimeout);
                var diff = (Date.now() - d)/1000;
                chrome.storage.local.set({"ceraTimeTotal": ceraTimeTotal + diff,
                "ceraTimesFound": ceraTimesFound+1});
                alert("Caught Cera!");
                $("#CERA").remove();
            });
        //timeout before failure to find cera remember that
        });
    }
});