const words = new Map();

const url = document.querySelector("link[rel='help']").href;
const response = await fetch(url);
const text = await response.text();
for (const line of text.split("\n")) {
	const word = line.toLocaleUpperCase();
	const hash = hex_md5(word);
	words.set(hash, word);
}

document.body.addEventListener("keydown", (event) => {
	if (event.key === "F7") {
		for (const hash of gl_words) {
			const word = words.get(hash);
			if (word) {
				gl_letters = word;
				checkWord(word);
			}
		}
		event.preventDefault();
	}
});
