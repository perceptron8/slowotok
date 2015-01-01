var words = {};

$.get($("link[type='text/plain']").attr("href")).then(function(response) {
	response.split("\n").forEach(function(line) {
		var word = line.toUpperCase();
		var hash = hex_md5(word);
		words[hash] = word;
	});
});

$("body").on("keydown", function(event) {
	if (event.which == 118) { // F7
		gl_words.forEach(function(hash) {
			var word = words[hash];
			if (word) {
				checkWord(word);
			}
		});
		return false;
	}
});
