//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn test_solve() {
	let board_letters = [
		['#', 'z', 'a', 'ż'],
		['ą', 'j', 'a', 'ó'],
		['l', 'ń', 'ź', 'ł'],
		['ś', 'ę', 'g', 'ć'],
	];

	let words = [ "da0d854eea2145636ea93a84b885e35b"];

	let solution = slowotok::solve(&board_letters, &words.map(String::from).to_vec());

	assert_eq!(solution, ["#zażółćgęśląjaźń"])
}
