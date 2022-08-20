import init, { gl_solve } from '../pkg/slowotok.js';

await init();

document.body.addEventListener("keydown", (event) => {
	if (event.key === "F7") {
		event.preventDefault();
		for (const word of gl_solve({ gl_boardLetters, gl_words}).gl_words) {
			gl_letters = word;
			checkWord(word);
		}
	}
});
