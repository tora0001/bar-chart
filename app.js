"use strict";

window.addEventListener("load", initApp);

const data = [12, 9, 28, 4, 15, 26, 3, 19, 20, 7, 23, 16, 8, 5, 0, 27, 2, 25, 24, 29, 6, 10, 31, 17, 21, 11, 30, 13, 1, 18, 14, 22, 32, 31, 26, 5, 16, 13, 8, 2];

function initApp() {
  setInterval(update, 1000);
}

function update() {
  updateData();
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

function updateData() {
  data.push(Math.floor(Math.random() * 32) + 1);
  data.shift();
}

// window.addEventListener("load", init);

// const model = [8, 12, 32, 4, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 16, 3, 1, 9, 8, 30, 12, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 4, 1, 18, 1];

// function init() {
//   setInterval(update, 1000);
// }

// function update() {
//   updateData();
//   displayAllBars();
// }

// function getNumberOfCustomers() {
//   return Math.floor(Math.random() * 32);
// }

// function displayAllBars() {
//   for (let i = 0; i < model.length; i++) {
//     const size = model[i];
//     const bar = document.querySelectorAll(".bar")[i];

//     bar.style.height = size + "px";
//   }
// }

// function updateData() {
//   model.push(getNumberOfCustomers());
//   model.shift();
// }
