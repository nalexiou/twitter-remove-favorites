var totalFavs = counter = mycount;
var incr = 100;

console.log(totalFavs);
console.log(counter);


function checkInput(){
	if (counter > 0 ) {
		accountfavs = $('.ProfileNav-label:contains("Favorites")').next().text();
		if (accountfavs < counter) {
			alert("You don't have enough favorites!");
			return;
		}

		else {
			scrollBottom();
		}
	}
	else {
		alert("You did not enter a valid number!"); 
		return;
	}
}

function scrollBottom() {
	window.scrollTo(0,document.body.scrollHeight);
	favs = $("button.ProfileTweet-actionButtonUndo.u-linkClean.js-actionButton.js-actionFavorite:Visible").length;
	console.log("counter: "+counter+" favs: " +favs+" incr:"+ incr);
	setTimeout(function timeOut() {
		if (counter > 0) {
			if (counter >= incr){
				if (favs<incr) {
					scrollBottom();
				}
				else {
					$("button.ProfileTweet-actionButtonUndo.u-linkClean.js-actionButton.js-actionFavorite:Visible").slice(0,incr).trigger("click");
					counter = counter - incr;
					// location.reload(true);
 					// $(document).ready(scrollBottom);
 					scrollBottom();
				}
			}
			else {
					incr = counter;
					scrollBottom();
			}
		}
		else {
			alert("Finished!");	
			window.scrollTo(0,0);
		}
	}, 100);
}

checkInput();