function setDarkMode() {
  document.body.style.backgroundColor = "#333";
  const allButtons = document.getElementsByTagName("button");
  // const gradients = document.getElementsByClassName("U0xwnf");
  // const translatingWindows = document.getElementsByClassName("ccvoYb");
  const translatingWindowsRenderer = document.getElementsByClassName("QsA0jb");
  const languageTabs = document.getElementsByClassName("VfPpkd-YVzG2b");

  const additionalStyles = document.createElement("style");
  additionalStyles.innerHTML = `
    /* gradient colors */
    .U0xwnf::after {
      background: linear-gradient(to right, rgba(255, 255, 255, 0), #333);
    }
    .X4DQ0::after {
      background: linear-gradient(to right, rgba(255, 255, 255, 0), #333);
    }
    
    /* color for translating section */
    .ccvoYb {
      background-color: #333;
    }

    /* language tabs */
    .Ose4Jf .VfPpkd-jY41G-V67aGc {
      color: rgb(200, 200, 200);
    }

    /* translation input section */
    .er8xn {
      color: rgb(190, 190, 190);
    }
    .KjuTac {
      background: #333;
    }
    .Bcbxbe:hover {
      background-color: #444;
    }
    .uNr6ee {
      color: rgb(190, 190, 190);
    }
    .xUPQqb {
      color: rgb(150, 150, 150);
    }

    /* translation output section */
    .QcsUad {
      background-color: #444;
    }
    .FqSPb, .xsPT1b, .lRu31 {
      color: rgb(190, 190, 190);
    }
  `;
  document.head.appendChild(additionalStyles);

  // translatingWindows.forEach((el, i) => {
  //   translatingWindows[i].style.background = "#333";
  // });

  // translatingWindowsRenderer.forEach((el, i) => {
  //   translatingWindowsRenderer[i].style.backgroundColor = "#333";
  // });

  // allButtons.forEach((el, i) => {
  //   allButtons[i].style.color = "white";
  // });

  // languageTabs.forEach((el, i) => {
  //   languageTabs[i].style.color = "rgb(200,200,200)";
  // });

  console.log("dark mode has been set");
}

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
