function setDarkMode() {
  document.body.style.backgroundColor = "#333";

  console.log("dark mode has been set");
}

console.log("from script");

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (
    changeInfo.status === "complete" &&
    tab.url.includes("translate.google")
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: setDarkMode,
      //   args: [tab.url],
    });
  }
});
