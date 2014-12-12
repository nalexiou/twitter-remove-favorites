function executeScript (tab) {
	var temp = document.getElementById('myfavoritecount').value;
	if (!isNumeric(temp)){
		document.getElementById('myfavoritecount').value = 1000;
		return;
	}
    chrome.tabs.executeScript(null, {file: "jquery-2.1.1.min.js" }, function() {
    	chrome.tabs.executeScript(null, {code: "var mycount = "+ temp }, function() {	
    		chrome.tabs.executeScript(null, {file: "inject.js" });
   		});
	});
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function main() {
	document.addEventListener('DOMContentLoaded', function () {
    	document.getElementById('alertButton').addEventListener('click', executeScript);
	});
}




main();