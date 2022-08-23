import init, { gl_solve } from '../pkg/slowotok.js';

await init();

document.body.addEventListener("keypress", (event) => {
	if (event.code === "NumpadEnter") {
		for (const word of gl_solve({ gl_boardLetters, gl_words}).gl_words) {
			gl_letters = word;
			checkWord(word);
		}
	}
});
