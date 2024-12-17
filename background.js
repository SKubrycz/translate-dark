function setDarkMode() {
  const mainBg = "#222";

  document.body.style.backgroundColor = mainBg;
  const allButtons = document.getElementsByTagName("button");
  // const gradients = document.getElementsByClassName("U0xwnf");
  // const translatingWindows = document.getElementsByClassName("ccvoYb");
  const translatingWindowsRenderer = document.getElementsByClassName("QsA0jb");
  const languageTabs = document.getElementsByClassName("VfPpkd-YVzG2b");

  const headerBanner = document.getElementById("gb");
  headerBanner.style.background = mainBg;

  const additionalStyles = document.createElement("style");
  additionalStyles.innerHTML = `
    /* navbar */
    header[role=banner] {
      background: ${mainBg};
    }

    /* drawer */
    div[role=navigation] {
      color: rgb(190, 190, 190);
      background: ${mainBg};
    }

    /* upper buttons */
    .Rj2Mlf:not(:disabled) {
      border-color: var(--gm-hairlinebutton-outline-color,#444);
    }

    /* gradient colors */
    .U0xwnf::after {
      background: linear-gradient(to right, rgba(255, 255, 255, 0), ${mainBg});
    }
    .X4DQ0::after {
      background: linear-gradient(to right, rgba(255, 255, 255, 0), ${mainBg});
    }
    
    /* color for translating section */
    .ccvoYb {
      background-color: ${mainBg};
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
      background: ${mainBg};
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
    .ita-kd-img {
      filter: invert(100%);
    }

    /* translation output section */
    .QcsUad {
      background-color: #444;
    }
    .FqSPb, .xsPT1b, .lRu31 {
      color: rgb(190, 190, 190);
    }

    .hX7wnb {
      border-top: 2px solid rgb(170, 170, 170);
      background-color: #444;
    }

    .ydsGXd {
      color: rgb(190, 190, 190);
    }
    .b08HRd:not(:disabled), .jqUpHc:not(:disabled) {
      color: rgb(190, 190, 190);
    }

    /* word chips */
    .U8K5nb {
      color: rgb(190, 190, 190);
      background-color: ${mainBg};
    }

    .GAyS9e {
      background: linear-gradient(to right, rgba(255, 255, 255, 0), #444);
    }

    .Bljmlb {
      border-top: 2px solid rgb(170, 170, 170);
    }

    /* footer icon buttons */
    .ySES5 {
      background-color: #444;
    }
    .TcXXXb {
      color: rgb(190, 190, 190);
    }

    /* background color after dictionary load */
    .T4LgNb {
      background-color: ${mainBg};
    }

    /* dictionary - no word written */
    .kmXzdf, .eSogib {
      background-color: ${mainBg};
    }
    .bJ6JAe {
      filter: invert(90%) hue-rotate(190deg);
    }
    .pwKYW {
      color: rgb(190, 190, 190);
    }

    /* dictionary */
    .jTj8gd {
      background-color: ${mainBg};
    }
    .SMqeCb {
      background-color: ${mainBg};
    }
    .kmXzdf, .eSogib {
      box-shadow: -1px 0 rgb(170, 170, 170);
    }
    .a2Icud {
      1px solid rgb(170, 170, 170);
    }
    .aia4Ud {
      color: rgb(190, 190, 190);
    }
    .S6GkK {
      color: rgb(190, 190, 190);
    }
    .JAk00 {
      color: rgb(190, 190, 190);
    }
    .AZPoqf {
      color: rgb(190, 190, 190);
    }
    .kgnlhe {
      color: rgb(190, 190, 190);
    }
  `;
  document.head.appendChild(additionalStyles);

  console.log("dark mode has been set");
}

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  const manifestData = chrome.runtime.getManifest();

  let isAllowed = false;
  const allowedHosts = manifestData.host_permissions;
  allowedHosts.forEach((el, i) => {
    let stripped = el.replace("*", "");
    stripped = stripped.replace("https://", "");

    if (tab.url.includes(stripped) && !isAllowed) {
      isAllowed = true;
    }
  });

  if (changeInfo.status === "loading" && isAllowed) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: setDarkMode,
      //   args: [tab.url],
    });
  }
});