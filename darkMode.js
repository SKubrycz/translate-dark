async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };

  let [tab] = await chrome.tabs.query(queryOptions);

  return tab;
}

async function runDarkMode() {
  let tab = await getCurrentTab();
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setDarkMode,
    args: [tab.url],
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await runDarkMode();
});
