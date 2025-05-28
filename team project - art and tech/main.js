import { makeStartSketch } from "./start.js";
import { makeHouseSketch } from "./house.js"; // 추가
import { makeDeskSketch } from "./desk.js"; // 추가
import { makeParkSketch } from "./park.js";
import { makeCoffeeSHopSketch } from "./coffeeShop.js";

window.state = window.state || {};
window.state.characterX = 100;
window.state.cameraX = 0;

let currentP5 = null;

// 캔버스를 담을 컨테이너 div가 index.html에 필요!
function launchScene(sceneName) {
  if (currentP5) {
    currentP5.remove();
    currentP5 = null;
  }
  if (sceneName === "start") currentP5 = new p5(makeStartSketch(), "canvas-container");
  else if (sceneName === "house") currentP5 = new p5(makeHouseSketch(), "canvas-container");
  else if (sceneName === "desk") currentP5 = new p5(makeDeskSketch(), "canvas-container");
  else if (sceneName === "park") currentP5 = new p5(makeParkSketch(), "canvas-container");
  else if (sceneName === "coffeeShop") currentP5 = new p5(makeCoffeeSHopSketch(), "canvas-container");
  
}

window.addEventListener("goToHouse", () => launchScene("house"));
window.addEventListener("goToDesk", () => launchScene("desk"));
window.addEventListener("goToPark", () => launchScene("park"));
window.addEventListener("goToCoffeeShop", () => launchScene("coffeeShop"));
//start
window.onload = () => launchScene("start");