//reference: https://editor.p5js.org/aferriss/sketches/HyBagyadG

function setup() {
  createCanvas(1000, 1000);
  textSize(500);
}

function draw() {
  background('green');
  
  
  
	push();
   fill('yellow')
    translate(500,500);
    rotate( radians(frameCount) );
    text("F", 0,0);
   
	pop();
  
  
}