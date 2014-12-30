define(["underscore", "underscore.string"], function(_, _s) {
	var Dictionary = function(words) {
		this.words = words;
	};
	
	Dictionary.prototype.containsPrefix = function(prefix) {
		var index = _.sortedIndex(this.words, prefix);
		var word = index < this.words.length ? this.words[index] : null;
		return _s.startsWith(word, prefix);
	};
	
	Dictionary.prototype.containsWord = function(word) {
		return _.indexOf(this.words, word, true) != -1;
	};
	
	return Dictionary;
});