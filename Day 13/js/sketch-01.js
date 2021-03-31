
function setup() {
    createCanvas(1000, 1000);
    background(255);
}

function draw() {
    r = 235;
    g = random(0, 255);
    b = random(100, 200);
    x = random(0, width);
    y = random(0, height);
    x2 = random(0, width);
    y2 = random(0, height);
    d = random (20, 100);

    noStroke();
    fill(255,20,120, 100);
    circle(x2, y2, d);

    fill(255);
   
    textSize(1200);
    textAlign(CENTER, CENTER);
    text('F', 500, 550)
}