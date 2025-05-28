export function makeDeskSketch() {
return function(p) {
    let deskImg; 
    let licenseImg;
    let cardImg;

    p.preload = function() {
        deskImg = p.loadImage("assets/책상.jpg");
        licenseImg = p.loadImage("assets/운전면허증.png");
        cardImg = p.loadImage("assets/교통카드.png");
    }

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = function() {
        p.background(220);
        p.image(deskImg, 0, 0, p.windowWidth, p.windowHeight);
        if (window.state.selectedItem !== "car") drawElement(licenseImg, p.width*(3/5), p.height*(3/5), 150); // 요소를 그리는 함수
        if (window.state.selectedItem !== "stair") drawElement(cardImg, p.width*(4/5), p.height*(3/5), 150);
    };

    p.mousePressed = function() {
        if (p.width*(3/5)<=p.mouseX && p.mouseX <= p.width*(3/5)+150) {
            window.state.selectedItem = "car";
        } else if (p.width*(4/5)<=p.mouseX && p.mouseX <= p.width*(4/5)+150) {
             window.state.selectedItem = "stair";
        } else if (window.state.selectedItem !== "") {
            window.dispatchEvent(new Event("goToHouse")); // 이동
        } 
    };

    // 요소를 그리는 함수
    // 이미지, x좌표, y좌표, 가로크기
    // 이미지의 비율을 유지하기 위해서 세로크기는 가로크기에 의존해서 설정정
    function drawElement(img, imgX, imgY, imgW) {
        let imgH = imgW*(img.height/img.width);
        p.image(img, imgX, imgY, imgW, imgH);
    }
};
}