import init, { gl_solve } from '../pkg/slowotok.js';

await init();

function findWords() {
	for (const word of gl_solve({gl_boardLetters, gl_words}).gl_words) {
		gl_letters = word;
		checkWord(word);
	}
}

const connectBoardOriginal = connectBoard;
window.connectBoard = function() {
	connectBoardOriginal();
	findWords();
}

const sendAnswersOriginal = sendAnswers;
globalThis.sendAnswers = function() {
	if (gl_points >= localStorage.gl_points) {
		sendAnswersOriginal();
	} else {
		syncNewGameTime();
	}
}

document.body.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		findWords();
	}
});

findWords();
