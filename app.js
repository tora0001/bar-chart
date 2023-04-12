"use strict";

window.addEventListener("load", initApp);

function initApp() {
  const bars = document.querySelectorAll(".bar");
  const firstBar = bars[0];

  firstBar.style.height = "50px";

  let h = 50;

  firstBar.style.height = `${h}px`;
}
