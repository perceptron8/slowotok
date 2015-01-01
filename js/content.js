const link = document.createElement("link");
link.href = chrome.extension.getURL("txt/words.txt");
document.head.appendChild(link);

const script = document.createElement("script");
script.src = chrome.extension.getURL("js/embed.js");
document.body.appendChild(script);
