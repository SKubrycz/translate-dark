function setDarkMode() {
  const mainColor = `rgb(190, 190, 190)`;
  const mainBg = "#222";
  const thinBorder = `1px solid rgb(170, 170, 170)`;
  const thickBorder = `2px solid rgb(170, 170, 170)`;

  document.body.style.backgroundColor = mainBg;
  document.body.style.color = mainColor;

  if (!document.URL.includes("/about")) {
    const headerBanner = document.getElementById("gb");
    headerBanner.style.background = mainBg;
  }

  const css = `
:root {
  --mainColor: rgb(190, 190, 190);
  --mainBg: #222;
  --thinBorder: 1px solid rgb(170, 170, 170);
  --thickBorder: 2px solid rgb(170, 170, 170);
}

html {
  scrollbar-color: #444 #222;
}

/* navbar */
header[role="banner"] {
  background: var(--mainBg);
}

/* settings */
.pWIpbc,
.Jp7KKb,
.XOPM0 {
  color: var(--mainColor);
}

/* drawer */
div[role="navigation"] {
  color: var(--mainColor);
  background: var(--mainBg);
}

/* upper buttons */
.Rj2Mlf:not(:disabled) {
  border-color: var(--gm-hairlinebutton-outline-color, #444);
}

/* gradient colors */
.U0xwnf::after {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), var(--mainBg));
}
.X4DQ0::after {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), var(--mainBg));
}

/* language choice popover */
.fMHXgc {
  background: var(--mainBg);
}
.yFQBKb {
  background: var(--mainBg);
}
.dykxn {
  background: var(--mainBg);
}
.qSb8Pe {
  color: var(--mainColor);
}
.qSb8Pe:hover {
  background: #444;
}

/* color for translating section */
.ccvoYb {
  background-color: var(--mainBg);
}

/* language tabs */
.Ose4Jf .VfPpkd-jY41G-V67aGc {
  color: rgb(200, 200, 200);
}

/* translation input section */
.er8xn {
  color: var(--mainColor);
}
.KjuTac {
  background: var(--mainBg);
}
.Bcbxbe:hover {
  background-color: #444;
}
.uNr6ee {
  color: var(--mainColor);
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
  color: var(--mainColor) !important;
  background-image: linear-gradient(to bottom, #333, #444) !important;
}
/*.vk-sf-h {
    color: var(--mainColor);
    background-image: linear-gradient(to bottom, #555, #666);
}*/
.ita-kd-dropdown-menu {
  background: #444 !important;
  border: var(--thinBorder) !important;
}
.ita-hwt-grip {
  background-position: -650px -110px !important;
  background-color: transparent !important;
  transform: rotate(90deg) !important;
}
.ita-hwt-grip-hover {
  background-position: -650px -110px !important;
  background-color: transparent !important;
  transform: rotate(90deg) !important;
}
.ita-hwt-close {
  background-color: transparent !important;
}
.ita-kd-menuitem {
  color: var(--mainColor) !important;
}
.ita-kd-menuitem:hover {
  background: #777 !important;
}
.ita-kd-menuitem-hover {
  /* does not work */
  background: #777 !important;
  background-color: #777 !important;
}
canvas.ita-hwt-canvas {
  background: #444 !important;
}
.ita-hwt-candidates {
  background: #444 !important;
}
.ita-hwt-candidate {
  color: var(--mainColor) !important;
}
.ita-hwt-candidate-hover {
  background: #777 !important;
}
.ita-hwt-buttons {
  background: #444 !important;
}
.ita-hwt-jfk-standard {
  background-color: #444 !important;
  background-image: linear-gradient(to bottom, #333, #444) !important;
}
.ita-hwt-jfk-hover {
  background-color: #777 !important;
}

/* translation output section */
.QcsUad {
  background-color: #444;
}
.FqSPb,
.xsPT1b,
.lRu31 {
  color: var(--mainColor);
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
  border-bottom: var(--thinBorder);
}
.WtlSJf:hover {
  background-color: #666;
}
.lrSgmd {
  color: var(--mainColor);
}
.W5CUef {
  color: rgb(170, 170, 170);
}
.qt6jm {
  border-top: var(--thickBorder);
}

.hX7wnb {
  border-top: var(--thickBorder);
  background-color: #444;
}

.ydsGXd {
  color: var(--mainColor);
}
.b08HRd:not(:disabled),
.jqUpHc:not(:disabled) {
  color: var(--mainColor);
}

/* word chips */
.U8K5nb {
  color: var(--mainColor);
  background-color: var(--mainBg);
}

.GAyS9e {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #444);
}

.Bljmlb {
  border-top: var(--thickBorder);
}

/* footer icon buttons */
.ySES5 {
  background-color: #444;
}
.TcXXXb {
  color: var(--mainColor);
}

/* background color after dictionary load */
.T4LgNb {
  background-color: var(--mainBg);
}

/* dictionary - no word written */
.kmXzdf,
.eSogib {
  background-color: var(--mainBg);
}
.bJ6JAe {
  filter: invert(90%) hue-rotate(190deg);
}
.pwKYW {
  color: var(--mainColor);
}

/* dictionary */
.jTj8gd {
  background-color: var(--mainBg);
}
.SMqeCb {
  background-color: var(--mainBg) !important;
}
.kmXzdf,
.eSogib {
  box-shadow: -1px 0 #444;
}
.a2Icud {
  border-top: var(--thinBorder);
}
.aia4Ud {
  color: var(--mainColor) !important;
}
.S6GkK {
  color: var(--mainColor);
}
.JAk00 {
  color: var(--mainColor);
}
.AZPoqf {
  color: var(--mainColor);
}
.kgnlhe {
  color: var(--mainColor);
}
.ECE1Qb {
  filter: invert(90%) hue-rotate(190deg) !important;
}

/* history */
.AzKM4 {
  background: var(--mainBg) !important;
}
.XMNbjd {
  color: var(--mainColor) !important;
}
.v2OCrb {
  color: var(--mainColor) !important;
}
.EYBmYc {
  color: var(--mainColor) !important;
}
.uqiNJb {
  color: rgb(170, 170, 170);
}
.DLAnyc {
  background: var(--mainBg) !important;
}
.vvNkBd {
  color: var(--mainColor);
}
.NBY4Kb {
  background: var(--mainBg) !important;
}

/* saved translations */
.j27i7 {
  background: var(--mainBg) !important;
}
.AP34ab {
  color: var(--mainColor) !important;
}
.kgJkHd {
  color: var(--mainColor) !important;
}
.VfPpkd-xl07Ob-XxIAqe {
  background-color: var(--mainBg) !important;
}
.VfPpkd-StrnGf-rymPhb-b9t22c {
  color: var(--mainColor) !important;
}

/* while no saved translations */
.KpIhE {
  filter: invert(90%);
}
.HswdMd {
  color: var(--mainColor) !important;
}

/* history & saved buttons */
.myVd4c .ySES5 {
  background: #444;
  border: 1px solid #444;
}

/* /ABOUT PAGE */
.glue-header .glue-header__bar {
  background: var(--mainBg) !important;
}
.glue-header__cta {
  background-color: var(--mainBg);
}
.glue-headline {
  color: var(--mainColor);
}
.progressive-tab-content-wrapper.active-tab .progressive-tab-content {
  color: rgb(210, 210, 210);
}
.glue-tab[aria-selected="true"] {
  color: rgb(210, 210, 210);
}
.glue-footer {
  background: var(--mainBg);
}
.glue-footer__link {
  color: var(--mainColor);
  background: var(--mainBg);
}
.glue-footer__lang-dropdown,
.glue-footer__lang-dropdown > option {
  color: var(--mainColor);
  background: var(--mainBg);
}
.glue-footer__lang-dropdown:active,
.glue-footer__lang-dropdown:focus {
  color: var(--mainColor);
  background: #444;
}
.glue-cookie-notification-bar {
  background: var(--mainBg);
}

`;

  const styles = document.createElement("style");
  styles.textContent = css;
  document.head.appendChild(styles);

  const languageButtons = document.querySelectorAll(
    "button.VfPpkd-AznF2e-OWXEXe-jJNx8e-QBLLGd"
  );

  function mutationCallback(mutationList, observer, child) {
    for (const mutation of mutationList) {
      if (mutation.type === "attributes") {
        const computed = window.getComputedStyle(mutation.target);
        if (computed.opacity === "0") {
          mutation.target.style.setProperty("color", mainColor, "important");
        }

        if (mutation.target.tabIndex == "0") {
          child.style.setProperty("color", "rgb(26, 115, 232)", "important");
        } else {
          child.style.setProperty("color", mainColor, "important");
        }
      }
    }
  }

  for (let i = 0; i < languageButtons.length; i++) {
    const children = languageButtons[i].children;
    const childChildren = children[0].children;

    const observer = new MutationObserver((mutationList, observer) =>
      mutationCallback(mutationList, observer, childChildren[0])
    );
    observer.observe(languageButtons[i], { attributes: true });

    languageButtons[i].addEventListener("mouseenter", (e) => {
      const hoverColor = `rgb(230, 230, 230)`;
      if (languageButtons[i] === e.target) {
        childChildren[0].style.setProperty("color", hoverColor, "important");
      }
    });

    languageButtons[i].addEventListener("mouseleave", (e) => {
      if (languageButtons[i] === e.target) {
        childChildren[0].style.setProperty("color", mainColor, "important");

        if (
          children[1].children[0].classList.value ===
          `VfPpkd-AznF2e-wEcVzc VfPpkd-AznF2e-wEcVzc-OWXEXe-NowJzb`
        ) {
          const computed = window.getComputedStyle(children[1].children[0]);
          const timeout = setTimeout(() => {
            if (computed.opacity === "1") {
              childChildren[0].style.setProperty(
                "color",
                "rgb(26, 115, 232)",
                "important"
              );
            } else {
              childChildren[0].style.setProperty(
                "color",
                mainColor,
                "important"
              );
            }
          }, 25);
        }
      }
    });
  }

  // console.log("dark mode has been set");
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
    });
  }
});
