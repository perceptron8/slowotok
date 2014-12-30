define(["jquery", "underscore.string"], function($, _s) {
	var requestUrl = "data/dictionary.pl_PL.utf8.txt";
	
	var basicForm = function(word) {
		return _s.strLeft(word, "/");
	};
	
	var lowerCase = function(word) {
		return word.toLowerCase();
	};
	
	var longEnough = function(word) {
		return word.length >= 3;
	};
	
	var processResponse = function(response) {
		return _s.lines(response)
			.map(basicForm)
			.map(lowerCase)
			.filter(longEnough)
			.sort();
	};
	
	return $.get(requestUrl).then(processResponse);
});
