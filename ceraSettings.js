$(document).ready(function() {
   $("#CPLabel").text($("#ceraPercent").val());
   $("#CSLabel").text($("#ceraSize").val());
   
   $("#ceraPercent").on("input",function() {
       $("#CPLabel").text($("#ceraPercent").val());
   });
   $("#ceraSize").on("input", function() {
       $("#CSLabel").text($("#ceraSize").val());
   });
   
   $("#resetSettings").click(function(){
      $("#ceraPercent").val(69);
      $("#ceraSize").val(5);
      $("#CPLabel").text($("#ceraPercent").val());
      $("#CSLabel").text($("#ceraSize").val());
   });
   
   $("#save").click(function() {
      chrome.storage.local.set({"ceraPercent": $("#ceraPercent").val()});
      chrome.storage.local.set({"ceraSize": $("#ceraSize").val()});
   });
});