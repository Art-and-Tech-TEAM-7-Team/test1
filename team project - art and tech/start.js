
export function makeStartSketch() {
return function(p) {


let viewPoint = 0;
let startImg;
let eyeOpen = false;
let showTitle = true;

p.preload = function() {
    startImg = p.loadImage("assets/시작화면.jpg");
};

p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
};

p.draw = function() {
    p.background(220);
    p.image(startImg, 0, 0, p.width, p.height);
    if (showTitle) {
        // 블러 효과 비슷하게 만들기
        p.push();
        p.tint(255, 80); // 배경 흐리게
        p.image(startImg, 0, 0, p.width, p.height);
        drawEyes();
        p.pop();

        // 반투명 오버레이(더 블러 느낌)
        p.push();
        p.noStroke();
        p.fill(240, 240, 240, 140);
        p.rect(0, 0, p.width, p.height);
        p.pop();

        // 제목/제작자 글자
        p.fill(40);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(56);
        p.text("title", p.width / 2, p.height / 2 - 80);

        p.textSize(28);
        p.fill(80);
        p.text("제작: 신진호, 유다은, 조혜진", p.width / 2, p.height / 2 + 10);
    } else {
        // 실제 시작화면 로직 (예: 눈, 애니메이션 등)
        drawEyes();
    }
};

p.mousePressed = function() {
    if (showTitle) {
        showTitle = false;
    } else {
        if (!eyeOpen) eyeOpen = true;
    }
}

p.mouseWheel = function(event) {
    if (event.delta > 0) {
        viewPoint += 10; // 스크롤 다운
    }

    //일정 정도 이상 스크롤 시 화면 이동
    if (viewPoint >= 50) { 
        window.dispatchEvent(new Event("goToHouse"));
    }
};

// 브라우저 창의 크기가 변경되었을 때 캔버스의 크기를 브라우저에 맞추는 함수수
p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
};

function drawEyes() {
    let a = 3/4;
    p.fill("#6f4f28 ");
    p.noStroke()
    if (eyeOpen) {
        p.ellipse(p.width/2-80, 220, 30*a, 40*a);
        p.ellipse(p.width/2+10, 220, 30*a, 40*a);
    } else {
        p.push();
        p.rectMode(p.CENTER);
        p.rect(p.width/2-80, 220, 30, 10);
        p.rect(p.width/2+10, 220, 30, 10);
        p.pop();
    }
}


}}