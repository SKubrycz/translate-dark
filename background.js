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
    .vk-box {
      background-color: #444 !important;
    }
    .vk-btn {
      color: rgb(190, 190, 190) !important;
      background-image: linear-gradient(to bottom, #333, #444) !important;
    }
    /*.vk-sf-h {
      color: rgb(190, 190, 190);
      background-image: linear-gradient(to bottom, #555, #666);
    }*/
    .ita-kd-dropdown-menu {
      background: #444 !important;
      border: 1px solid rgb(170, 170, 170) !important;
    }
    .ita-kd-menuitem {
      color: rgb(190, 190, 190) !important;
    }
    .ita-kd-menuitem:hover {
      background: #777 !important;
    }
    .ita-kd-menuitem-hover {
      /* does not work */
      background: #777 !important;
      background-color: #777 !important;
    }

    /* translation output section */
    .QcsUad {
      background-color: #444;
    }
    .FqSPb, .xsPT1b, .lRu31 {
      color: rgb(190, 190, 190);
    }

    .jCAhz:hover {
      background-color: #777;
    }
    .jCAhz.C1N51c {
      background-color: #777;
    }
    .Xcmxjb.FwR7Pc {
      background-color: #777;
    }

    /* synonyms popover */
    .NWlwsb {
      background-color: #555;
    }
    .WtlSJf.KKjvXb {
      background-color: #666;
    }
    .WtlSJf {
      border-bottom: 1px solid rgb(170, 170, 170);
    }
    .WtlSJf:hover {
      background-color: #666;
    }
    .lrSgmd {
      color: rgb(190, 190, 190);
    }
    .W5CUef {
      color: rgb(170, 170, 170);
    }
    .qt6jm {
      border-top: 2px solid rgb(170, 170, 170);
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

    /* history */
    .AzKM4 {
      background: ${mainBg} !important;
    }
    .XMNbjd {
      color: rgb(190, 190, 190) !important;
    }
    .v2OCrb {
      color: rgb(190, 190, 190) !important;
    }
    .EYBmYc {
      color: rgb(190, 190, 190) !important;
    }
    .uqiNJb {
      color: rgb(170, 170, 170);
    }
    .DLAnyc {
      background: ${mainBg} !important;
    }
    .vvNkBd {
      color: rgb(190, 190, 190);
    }
    .NBY4Kb {
      background: ${mainBg} !important;
    }

    /* saved translations */
    .j27i7 {
      background: ${mainBg} !important;
    }
    .AP34ab {
      color: rgb(190, 190, 190) !important;
    }
    .kgJkHd {
      color: rgb(190, 190, 190) !important;
    }
    .VfPpkd-xl07Ob-XxIAqe {
      background-color: ${mainBg} !important;
    }
    .VfPpkd-StrnGf-rymPhb-b9t22c {
      color: rgb(190, 190, 190) !important;
    }

    /* while no saved translations */
    .KpIhE {
      filter: invert(90%);
    }
    .HswdMd {
      color: rgb(190, 190, 190) !important;
    }

    /* history & saved buttons */
    .myVd4c .ySES5 {
      background: #444;
      border: 1px solid #444;
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
