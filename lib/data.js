define(["jquery", "underscore.string"], function($, _s) {
	var basicForm = function(word) {
		return _s.strLeft(word, "/");
	};
	
	var lowerCase = function(word) {
		return word.toLowerCase();
	};
	
	var longEnough = function(word) {
		return word.length >= 3;
	};
	
	var process = function(data) {
		return _s.lines(data)
			.map(basicForm)
			.map(lowerCase)
			.filter(longEnough)
			.sort();
	};
	
	var Data = {};
	
	Data.load = function(url) {
		return $.get(url).then(process);
	};
	
	return Data;
});
