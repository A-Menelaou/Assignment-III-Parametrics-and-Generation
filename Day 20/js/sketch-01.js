//Reference: https://p5js.org/examples/3d-sine-cosine-in-3d.html

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);
  rotateY(frameCount * 0.01);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 1000,
        sin(frameCount * 0.001 + j) * 1000,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
       noStroke();
    fill(245, 24, 131);
    rect(40, 20, 5, 50); // left, top, width, height

   
    noStroke();
    fill(245, 24, 131);
    rect(40, 20, 30, 5);

    noStroke();
    fill(245, 24, 131);
    rect(40, 40, 25, 5);
      pop();
    }
    pop();
  }
  	
  
}
