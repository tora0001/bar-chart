"use strict";

window.addEventListener("load", initApp);

const data = [12, 9, 28, 4, 15, 26, 3, 19, 20, 7, 23, 16, 8, 5, 0, 27, 2, 25, 24, 29, 6, 10, 31, 17, 21, 11, 30, 13, 1, 18, 14, 22, 32, 31, 26, 5, 16, 13, 8, 2, 23, 29, 19];

function initApp() {
  displayAllBars();
}

function displayAllBars() {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < 40; i++) {
    const bar = bars[i];
    let h = (data[i] / 32) * 100;
    bar.style.height = `${h}px`;
  }
}
