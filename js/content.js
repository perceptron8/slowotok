const script = document.createElement("script");
script.src = chrome.runtime.getURL("js/embed.js");
script.type = "module";
document.body.appendChild(script);
