$(document).ready(function() {
    
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
        
        $("#ceraPercent").val(ceraPercent);
        $("#ceraSize").val(ceraSize);
        $("#ceraTime").val(ceraTime);
        $("#timesSpawned").text(ceraTimesSpawned);
        $("#timesFound").text(ceraTimesFound);
        $("#totalTimeToFind").text(ceraTimeTotal);
        $("#percentFound").text((ceraTimesSpawned == 0) ? 0: ceraTimesFound/ceraTimesSpawned);
        $("#avgTimeToFind").text((ceraTimesSpawned == 0) ? 0: ceraTimeTotal/ceraTimesSpawned);
        
        $("#CPLabel").text($("#ceraPercent").val());
        $("#CSLabel").text($("#ceraSize").val());
        $("#CTLabel").text($("#ceraTime").val());

    }); 
    
    $("#ceraPercent").on("input",function() {
        $("#CPLabel").text($("#ceraPercent").val());
    });
    $("#ceraSize").on("input", function() {
        $("#CSLabel").text($("#ceraSize").val());
    });
    $("#ceraTime").on("input", function() {
        $("#CTLabel").text($("#ceraTime").val());
    });

    $("#resetSettings").click(function(){
       $("#ceraPercent").val(69);
       $("#ceraSize").val(5);
       $("#ceraTime").val(10);
       $("#CPLabel").text($("#ceraPercent").val());
       $("#CSLabel").text($("#ceraSize").val());
       $("#CTLabel").text($("#ceraTime").val());
    });

    $("#save").click(function() {
       chrome.storage.local.set({"ceraPercent": $("#ceraPercent").val()});
       chrome.storage.local.set({"ceraSize": $("#ceraSize").val()});
       chrome.storage.local.set({"ceraTime": $("#ceraTime").val()});
    });
    
    $("#resetStats").click(function(){
        chrome.storage.local.set({"ceraTimesSpawned": 0,
        "ceraTimesFound": 0,"ceraTimeTotal": 0});
        $("#timesSpawned").text(0);
        $("#timesFound").text(0);
        $("#totalTimeToFind").text(0);
        $("#percentFound").text(0);
        $("#avgTimeToFind").text(0);
    });


});