export function makeParkSketch() {
return function(p) {


window.state.selectedItem = "stair";

let parkImg, coffeeShopImg, carImg;
let stairImg; // 지하철 계단
let coffeeShopX, coffeeShopY, objX, objY;

let characterImg = ['', ''];
let characterX = window.state.characterX; // 캐릭터의 초기 X 위치   
let speed = 5;

p.preload = function() {
    parkImg = p.loadImage("assets/공원.jpg");
    coffeeShopImg = p.loadImage("assets/커피숍-외부.png");
    carImg = p.loadImage("assets/자동차.png");
    stairImg = p.loadImage("assets/지하철 계단.png");
    characterImg[0] = p.loadImage("assets/캐릭터1.png");
    characterImg[1] = p.loadImage("assets/캐릭터3.png");
}

p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);

    objY = p.height - 300;
    coffeeShopX = p.width / 2 - 200;
    coffeeShopY = p.height - 350;
    objX = p.width - 450;
}

p.draw = function() {
    p.background(220);

   
    
    p.image(parkImg, 0, 0, p.width, p.height);
    drawCoffeeShop();
    if (window.state.selectedItem === "car") {
        drawCar();
    } else if (window.state.selectedItem === "stair") {
        drawStair();
    }
    drawCharacter();
}

p.mousePressed = function() {
    window.state.characterX = characterX;
    if (coffeeShopX <= p.mouseX && p.mouseX <= coffeeShopX + 400) {

        window.dispatchEvent(new Event("goToCoffeeShop"));
    }

    if (objX <= p.mouseX && p.mouseX <= objX + 300) {
        window.dispatchEvent(new Event("goToTemp"));
    }
};

// 브라우저 창의 크기가 변경되었을 때 캔버스의 크기를 브라우저에 맞추는 함수수
p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
};

function drawCoffeeShop() {
    let imgW = 300;
    let imgH = imgW*(coffeeShopImg.height/coffeeShopImg.width)
    p.image(coffeeShopImg, coffeeShopX, coffeeShopY, imgW, imgH);
}

function drawCar() {
    let imgW = 300;
    let imgH = imgW*(carImg.height/carImg.width);
    p.image(carImg, objX, objY, imgW, imgH);
}

function drawStair() {
    let imgW = 300;
    let imgH = imgW*(stairImg.height/stairImg.width);
    p.image(stairImg, objX, objY, imgW, imgH);
}

function drawCharacter() {
    if (p.keyIsPressed) {
        if (p.keyCode === p.RIGHT_ARROW) characterX += speed;
        if (p.keyCode === p.LEFT_ARROW) characterX -= speed;

        // 캐릭터가 이미지 범위 밖으로 못 나가게
        characterX = p.constrain(characterX, 0, parkImg.width);
    }

    // 화면 내에서의 캐릭터 x좌표 = 실제좌표 - 카메라좌표
    let drawX = characterX;
    let drawY = p.height - 300; // y는 예시
    p.image(characterImg[0], drawX, drawY, 200, 280);
}


}
}