import iconDark16Url from "@/assets/icon-dark-16.png";
import iconDark32Url from "@/assets/icon-dark-32.png";
import iconDark48Url from "@/assets/icon-dark-48.png";
import iconDark128Url from "@/assets/icon-dark-128.png";

chrome.runtime.onMessage.addListener((message) => {
  if (message.scheme == "dark") {
    chrome.action.setIcon({
      path: {
        "16": iconDark16Url,
        "32": iconDark32Url,
        "48": iconDark48Url,
        "128": iconDark128Url,
      },
    });
  }
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.id == undefined) {
    return;
  }
  chrome.tabs.sendMessage(tab.id, { action: "toggle" });
});
