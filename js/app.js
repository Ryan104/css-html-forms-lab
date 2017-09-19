$(document).ready(function(){
	console.log('document ready!');

	var main = $('#main');

	function makeResults() {

		$( "<section class='container results'><h1>A True Story:</h1>" ).appendTo(main);

		// Get all form data
		const madLibs = {
			name: $('input[name=name]').val(),
			verb1: $('select[name=verb-1').val(),
			mission: $('textarea[name=mission]').val(),
			sentiment: $('input[name=sentiment]:checked').val(),
			noun1: $('input[name=noun-1]').val(),
			adjectives: $('input[name=adjective-2]:checked')
				.map(function(){return this.value})
				.get().join(", "),
			noun2: $('input[name=noun-2]').val()

		};

		console.log(madLibs);

	};

	$("form").on("submit", function(event){

	    // Stop the form from submitting
	    event.preventDefault();

		// Run the 'makeResults' function seen above
		makeResults();

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
