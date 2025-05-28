export function makeCoffeeSHopSketch() {
return function(p) { 


let coffeeShopImg, coffeeImg;

p.preload = function() {
    coffeeShopImg = p.loadImage("assets/커피숍.jpg");
    coffeeImg = p.loadImage("assets/커피.png");
}

p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
}

p.draw = function() {
    p.background(229);
    
    p.image(coffeeShopImg, 0, 0, p.windowWidth, p.windowHeight);
}

p.mousePressed = function() {
    window.dispatchEvent(new Event("goToPark"));
}
// 브라우저 창의 크기가 변경되었을 때 캔버스의 크기를 브라우저에 맞추는 함수
p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
};


}
}
