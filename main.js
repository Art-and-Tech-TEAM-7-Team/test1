import { makeStartSketch } from "./start.js"; // 다른 파일에 있는 함수를 가져옴옴
import { makeHouseSketch } from "./house.js"; // 추가
import { makeDeskSketch } from "./desk.js"; // 추가
import { makeParkSketch } from "./park.js";
import { makeCoffeeSHopSketch } from "./coffeeShop.js";

window.state = window.state || {}; // 모든 파일에서 사용가능한 변수들들(객체를 이용) -> 파이썬의 딕셔너리 생각하면 좋다!
window.state.characterX = 100; // window.state의 사용법 (캐릭터의 위치를 저장)
window.state.cameraX = 0;
window.state.selectedItem = "";

let currentP5 = null;

// 캔버스를 담을 컨테이너 div가 index.html에 필요!
function launchScene(sceneName) {
  if (currentP5) {
    currentP5.remove();
    currentP5 = null;
  }
  if (sceneName === "start") currentP5 = new p5(makeStartSketch(), "canvas-container"); // 캔버스 그리기기
  else if (sceneName === "house") currentP5 = new p5(makeHouseSketch(), "canvas-container");
  else if (sceneName === "desk") currentP5 = new p5(makeDeskSketch(), "canvas-container");
  else if (sceneName === "park") currentP5 = new p5(makeParkSketch(), "canvas-container");
  else if (sceneName === "coffeeShop") currentP5 = new p5(makeCoffeeSHopSketch(), "canvas-container");
  
}

window.addEventListener("goToHouse", () => launchScene("house")); // 다른 파일에서 window.dispatchEvent(new Event("goToHouse")); 명령문이 작동하면 launchScene("house")함수 호출 -> 장면 전환환
window.addEventListener("goToDesk", () => launchScene("desk"));
window.addEventListener("goToPark", () => launchScene("park"));
window.addEventListener("goToCoffeeShop", () => launchScene("coffeeShop"));

window.onload = () => launchScene("start"); //시작 시 start화면면