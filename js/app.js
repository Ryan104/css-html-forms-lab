$(document).ready(function(){
	console.log('document ready!');

	var main = $('#main');
	$( "<section class='container results'></section>" ).appendTo(main);
	var $results = $('.results');


	function makeResults() {
		// Clear any old content
		$results.empty();

		// Append story header
		$results.append('<h1>A True Story:</h1>');

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

		// Build output string.

		const resultsText = `
			Once upon a time there was a Developer named ${madLibs.name}.
			${madLibs.name} came to General Asssembly to ${madLibs.verb1} the great mountain of programming knowledge.
			"${madLibs.mission}", ${madLibs.name} shouted.
			Though ${madLibs.sentiment}, ${madLibs.name} was able to overcome all obstacles with the power of their ${madLibs.noun1}.
			In the end, their success can be contributed entirely to their ${madLibs.adjectives} ${madLibs.noun2}.
		`;

		console.log(resultsText);
		$('.results').append('<p>' + resultsText);

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
