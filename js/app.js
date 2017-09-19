$(document).ready(function(){
	console.log('document ready!');
	var main = $('#main');

	function makeResults() {

		$( "<section class='container results'><h1>A True Story:</h1>" ).appendTo(main);

		// JS Native:
		// var results = document.createElement('section');
		// results.innerHTML = '<h1>' + 'A true story:' + '</h1>';
		// results.className = 'container results';
		// main.appendChild(results);
	};

	$("form").on("submit", function(event){

	    // Stop the form from submitting

		// Run the 'makeResults' function seen above

		/*
		
			For each value entered into a form input, add the input to the corresponding sentence, then append the text into the results section:

			"Once upon a time there was a Developer named NAME."

			"NAME came to General Asssembly to VERB1 the great mountain of programming knowledge."

			""MISSION", NAME shouted."

			"Though SENTIMENT, NAME was able to overcome all obstacles with the power of their NOUN."

			"In the end, their success can be contributed entirely to their " + ADJECTIVE2[list each one checked, comma-separated] + NOUN2."

		*/ 
	});

});
