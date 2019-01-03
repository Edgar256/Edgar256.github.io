$(document).ready(function(){

	var inspire = ["Did you know ?", 
					"It takes a visitor  12 seconds to leave your website if they are not impressed with what they see.", 
					"Fancy fonts are ignored.",
					"Short paragraphs work better than long ones.",
					"Ads, that are placed on the top or left part of your website, get the most views.",
					"Lists are better at keeping your reader focused than large paragraphs.",
					"Changing text makes website visitors inquisitive",
					"Big pictures attract more attention than small ones.",
					"White space is good!",
					"People start viewing your website from the top left corner.",
					"Text attracts more attention than pictures."];
	var counter = 0;
	var changeInspire = document.getElementById("didKnow");
	var start = setInterval(change,3000);

	function change(){
		changeInspire.innerHTML = inspire[counter];
		counter++;

		if (counter >= text.length){
			counter = 0;
		}
	}

});