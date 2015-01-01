$(function() {
	$("head").append(
			$("<link type='text/plain'/>")
			.attr("href", chrome.extension.getURL("txt/words.txt"))
	);
	$("head").append(
		$("<script type='text/javascript'/>")
			.attr("src", chrome.extension.getURL("js/embed.js"))
	);
});
