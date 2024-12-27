function setDarkMode() {
  const mainColor = `rgb(190, 190, 190)`;
  const mainBg = "#222";
  const thinBorder = `1px solid rgb(170, 170, 170)`;
  const thickBorder= `2px solid rgb(170, 170, 170)`;

  document.body.style.backgroundColor = mainBg;
  document.body.style.color = mainColor;

  if (!document.URL.includes("/about")) {
    const headerBanner = document.getElementById("gb");
    headerBanner.style.background = mainBg;
  }

  const additionalStyles = document.createElement("style");
  additionalStyles.innerHTML = `
    html {
      scrollbar-color: #444 #222;
    }

    /* navbar */
    header[role=banner] {
      background: ${mainBg};
    }

    /* settings */
    .pWIpbc, .Jp7KKb, .XOPM0 {
      color: ${mainColor};
    }

    /* drawer */
    div[role=navigation] {
      color: ${mainColor};
      background: ${mainBg};
    }

    /* upper buttons */
    .Rj2Mlf:not(:disabled) {
      border-color: var(--gm-hairlinebutton-outline-color, #444);
    }

    /* gradient colors */
    .U0xwnf::after {
      background: linear-gradient(to right, rgba(255, 255, 255, 0), ${mainBg});
    }
    .X4DQ0::after {
      background: linear-gradient(to right, rgba(255, 255, 255, 0), ${mainBg});
    }

    /* language choice popover */
    .fMHXgc {
      background: ${mainBg};
    }
    .yFQBKb {
      background: ${mainBg};
    }
    .dykxn {
      background: ${mainBg};
    }
    .qSb8Pe {
      color: ${mainColor};
    }
    .qSb8Pe:hover {
      background: #444;
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
      color: ${mainColor};
    }
    .KjuTac {
      background: ${mainBg};
    }
    .Bcbxbe:hover {
      background-color: #444;
    }
    .uNr6ee {
      color: ${mainColor};
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
      color: ${mainColor} !important;
      background-image: linear-gradient(to bottom, #333, #444) !important;
    }
    /*.vk-sf-h {
      color: ${mainColor};
      background-image: linear-gradient(to bottom, #555, #666);
    }*/
    .ita-kd-dropdown-menu {
      background: #444 !important;
      border: ${thinBorder} !important;
    }
    .ita-kd-menuitem {
      color: ${mainColor} !important;
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
      color: ${mainColor};
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
      border-bottom: ${thinBorder};
    }
    .WtlSJf:hover {
      background-color: #666;
    }
    .lrSgmd {
      color: ${mainColor};
    }
    .W5CUef {
      color: rgb(170, 170, 170);
    }
    .qt6jm {
      border-top: ${thickBorder};
    }

    .hX7wnb {
      border-top: ${thickBorder};
      background-color: #444;
    }

    .ydsGXd {
      color: ${mainColor};
    }
    .b08HRd:not(:disabled), .jqUpHc:not(:disabled) {
      color: ${mainColor};
    }

    /* word chips */
    .U8K5nb {
      color: ${mainColor};
      background-color: ${mainBg};
    }

    .GAyS9e {
      background: linear-gradient(to right, rgba(255, 255, 255, 0), #444);
    }

    .Bljmlb {
      border-top: ${thickBorder};
    }

    /* footer icon buttons */
    .ySES5 {
      background-color: #444;
    }
    .TcXXXb {
      color: ${mainColor};
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
      color: ${mainColor};
    }

    /* dictionary */
    .jTj8gd {
      background-color: ${mainBg};
    }
    .SMqeCb {
      background-color: ${mainBg} !important;
    }
    .kmXzdf, .eSogib {
      box-shadow: -1px 0 #444;
    }
    .a2Icud {
      border-top: ${thinBorder};
    }
    .aia4Ud {
      color: ${mainColor} !important;
    }
    .S6GkK {
      color: ${mainColor};
    }
    .JAk00 {
      color: ${mainColor};
    }
    .AZPoqf {
      color: ${mainColor};
    }
    .kgnlhe {
      color: ${mainColor};
    }

    /* history */
    .AzKM4 {
      background: ${mainBg} !important;
    }
    .XMNbjd {
      color: ${mainColor} !important;
    }
    .v2OCrb {
      color: ${mainColor} !important;
    }
    .EYBmYc {
      color: ${mainColor} !important;
    }
    .uqiNJb {
      color: rgb(170, 170, 170);
    }
    .DLAnyc {
      background: ${mainBg} !important;
    }
    .vvNkBd {
      color: ${mainColor};
    }
    .NBY4Kb {
      background: ${mainBg} !important;
    }

    /* saved translations */
    .j27i7 {
      background: ${mainBg} !important;
    }
    .AP34ab {
      color: ${mainColor} !important;
    }
    .kgJkHd {
      color: ${mainColor} !important;
    }
    .VfPpkd-xl07Ob-XxIAqe {
      background-color: ${mainBg} !important;
    }
    .VfPpkd-StrnGf-rymPhb-b9t22c {
      color: ${mainColor} !important;
    }

    /* while no saved translations */
    .KpIhE {
      filter: invert(90%);
    }
    .HswdMd {
      color: ${mainColor} !important;
    }

    /* history & saved buttons */
    .myVd4c .ySES5 {
      background: #444;
      border: 1px solid #444;
    }

    /* /ABOUT PAGE */
    .glue-header .glue-header__bar {
      background: ${mainBg} !important;
    }
    .glue-header__cta {
      background-color: ${mainBg};
    }
    .glue-headline {
      color: ${mainColor};
    }
    .progressive-tab-content-wrapper.active-tab .progressive-tab-content {
      color: rgb(210, 210, 210);
    }
    .glue-tab[aria-selected=true] {
      color: rgb(210, 210, 210);
    }
    .glue-footer {
      background: ${mainBg};
    }
    .glue-footer__link {
      color: ${mainColor};
      background: ${mainBg};
    }
    .glue-footer__lang-dropdown, .glue-footer__lang-dropdown > option {
      color: ${mainColor};
      background: ${mainBg};
    }
    .glue-footer__lang-dropdown:active, .glue-footer__lang-dropdown:focus {
      rgb(190, 190, 190);
      background: #444;
    }
    .glue-cookie-notification-bar {
      background: ${mainBg};
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
