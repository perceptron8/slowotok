const words = {};

(async () => {
	const url = document.querySelector("link:last-child").href;
	const response = await fetch(url);
	const text = await response.text();
	for (const line of text.split("\n")) {
		const word = line.toLocaleUpperCase();
		const hash = hex_md5(word);
		words[hash] = word;
	}
})();

document.body.addEventListener("keydown", (event) => {
	if (event.key === "F7") {
		for (const hash of gl_words) {
			const word = words[hash];
			if (word) {
				gl_letters = word;
				checkWord(word);
			}
		}
		event.preventDefault();
	}
});
