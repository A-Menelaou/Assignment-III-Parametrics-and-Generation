//Reference: https://p5js.org/examples/3d-geometries.html

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);



  translate(0, 0, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100,50,150 );
  
  pop();
  
  translate(0, 100, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100,50,100 );
  
  pop();

  
  translate(-50, -25, 90);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  box(50, 200, 50, );
 
  pop();

  


 

}
