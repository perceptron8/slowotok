mod utils;

use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};

use std::cmp;
use std::string::String;
use std::collections::HashMap;
use md5::Md5;
use md5::Digest;

const N: usize = 4;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize)]
struct Game {
	gl_boardLetters: [[char; N]; N],
	gl_words: Vec<String>,
}

#[derive(Serialize, Deserialize)]
struct Solution {
	gl_words: Vec<String>,
}

#[wasm_bindgen]
pub fn gl_solve(game: &JsValue) -> JsValue {
	utils::set_panic_hook();
	let _game: Game = game.into_serde().unwrap();
	let _solution: Solution = Solution {
		gl_words: solve(&_game.gl_boardLetters, &_game.gl_words),
	};
	return JsValue::from_serde(&_solution).unwrap();
}

#[allow(non_snake_case)]
pub fn solve(gl_boardLetters: &[[char; N]; N], gl_words: &Vec<String>) -> Vec<String> {
	let mut words: HashMap<String, String> = HashMap::new();
	for word in gl_words {
		words.insert(word.clone(), String::from(""));
	}
	for d in 10..N * N {
		for r in 0..N {
			for c in 0..N {
				search(&gl_boardLetters, &mut words, &mut [[false; N]; N], &mut String::from(""), r, c, d);
			}
		}
		if !words.values().any(String::is_empty) {
			break;
		}
	}
	let mut solution: Vec<String> = Vec::new();
	for word in gl_words {
		solution.push(words.get(word).unwrap().clone());
	}
	return solution;
}

fn search(board_letters: &[[char; N]; N], words: &mut HashMap<String, String>, grid: &mut [[bool; N]; N], word: &mut String, r: usize, c: usize, d: usize) {
	grid[r][c] = true;
	word.push(board_letters[r][c]);
	if words.contains_key(&hash(word)) {
		words.insert(hash(word), word.clone());
	}
	if d > 0 {
		for y in r.saturating_sub(1)..=cmp::min(r + 1, N - 1) {
			for x in c.saturating_sub(1)..=cmp::min(c + 1, N - 1) {
				if !grid[y][x] {
					search(board_letters, words, grid, word, y, x, d - 1);
				}
			}
		}
	}
	word.pop();
	grid[r][c] = false;
}

fn hash(word: &String) -> String {
	let mut hasher = Md5::new();
	hasher.update(&word);
	let hash = hasher.finalize();
	return hex::encode(&hash);
}
