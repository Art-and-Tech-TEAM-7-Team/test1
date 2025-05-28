export function makeDeskSketch() {
return function(p) {
    let deskImg;

    p.preload = function() {
        deskImg = p.loadImage("assets/책상.jpg");
    }
    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = function() {
        p.background(220);
        p.image(deskImg, 0, 0, p.windowWidth, p.windowHeight);
    };
    p.mousePressed = function() {
        window.dispatchEvent(new Event("goToHouse"));
    }
};
}