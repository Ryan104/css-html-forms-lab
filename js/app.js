$(document).ready(function(){
	console.log('document ready!');

	var main = $('#main');
	$( "<section class='container results'></section>" ).appendTo(main);
	var $results = $('.results');

	// form elements
	const $formElements = {
		name: $('input[name=name]'),
		verb1: $('select[name=verb-1'),
		mission: $('textarea[name=mission]'),
		sentiment: $('input[name=sentiment]'),
		noun1: $('input[name=noun-1]'),
		adjectives: $('input[name=adjective-2]'),
		noun2: $('input[name=noun-2]')
	};

	


	function makeResults() {
		// Clear any old content
		$results.empty();

		// Append story header
		$results.append('<h1>A True Story:</h1>');

		// Get all form data
		const madLibs = {
			name: $formElements.name.val(),
			verb1: $formElements.verb1.val(),
			mission: $formElements.mission.val(),
			sentiment: $formElements.sentiment.filter(':checked').val(), //filter finds checked radios
			noun1: $formElements.noun1.val(),
			adjectives: $formElements.adjectives.filter(':checked')
				.map(function(){return this.value})
				.get().join(", "),
			noun2: $formElements.noun2.val()
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

	});

	// AUTOFILL
	$('#lotr-fill').click(function(){
		console.log("autofill clicked");
		// Destructure elements
		const {name, verb1, mission, sentiment, noun1, adjectives, noun2} = $formElements;
		console.log(name);

		name.val('Gandalf');
		verb1.val('conquer');
		mission.val('YOU SHALL NOT PASS!');
		sentiment[1].setAttribute('checked', 'true');
		noun1.val('magic staff');
		adjectives[0].setAttribute('checked', 'true');
		noun2.val('white beard');

	});

});
