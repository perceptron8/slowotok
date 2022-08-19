const link = document.createElement("link");
link.href = chrome.runtime.getURL("txt/words.txt");
link.rel = "help";
document.head.appendChild(link);

const script = document.createElement("script");
script.src = chrome.runtime.getURL("js/embed.js");
script.type = "module";
document.body.appendChild(script);
