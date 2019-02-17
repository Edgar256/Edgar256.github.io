$(document).ready(function(){

	console.log('JavaScript loaded successfully');
	$(".displayMsg").click(function(){
  		alert("This button has not yet been linked, please check out the code on Github.");
	});
	/*function displayMsg(){
		//alert("This button has not yet been linked, please check out the code on Github");
		console.log("You clicked the button");
	};*/
	/*$(".kkk").click(function(){
  		alert("The paragraph was clicked.");
	});*/

	var inspire = ["Did you know ?",					 
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
	var start = setInterval(change,2500);

	function change(){

		changeInspire.innerHTML = inspire[counter];
		counter++;

		while(counter >= inspire.length){
			counter = 0;
		}

		/*if (counter >= inspire.length){
			counter = 0;
		}*/
	};
	

	



});