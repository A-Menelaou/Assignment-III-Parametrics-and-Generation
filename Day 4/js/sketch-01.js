// original code inspiration https://editor.p5js.org/p5/sketches/Hello_P5:_animate
let x, y;

function setup() {
  createCanvas(1000, 1000);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(200);
  
  // Draw a circle
  stroke(0);
    fill(255);

    noStroke();
    fill(212, 237,199);
    rect(x, y, 50, 500); // left, top, width, height

   
    noStroke();
    fill(212, 237,199);
    rect(x, y, 300, 50);

    noStroke();
    fill(212, 237,199);
    rect(x, 200, 300, 50);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

