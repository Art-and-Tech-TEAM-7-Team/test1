
export function makeStartSketch() {
    return function(p) {
        let viewPoint = 0;
        let startImg;

        p.preload = function() {
            startImg = p.loadImage("assets/시작화면.jpg");
        };
        
        p.setup = function() {
            p.createCanvas(p.windowWidth, p.windowHeight);
        };
        
        p.draw = function() {
            p.background(220);
            p.image(startImg, 0, 0, p.width, p.height);
        };
        
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
    }
}