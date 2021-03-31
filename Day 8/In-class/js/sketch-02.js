function setup(){

    createCanvas(1000, 1000); // width, height
    frameRate(30);
    angleMode(DEGREES);
    background( 255,100,176); // rgb
    
}

function draw() {
    
    for(i = 0; i < 20; i++){
        var noiseVal = mouseY + random(-20, 20);
        line(i * 10, 0, i * 10, noiseVal);
        noFill();
        arc( i * 10, i * 10, 700, 400, noiseVal / 4.77, 50);
    }
}