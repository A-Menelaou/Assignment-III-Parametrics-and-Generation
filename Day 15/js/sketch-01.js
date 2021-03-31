let detailX;
// slide to see how detailX works
function setup() {
  createCanvas(1000, 1000, WEBGL);
  detailX = createSlider(3, 24, 3);
  detailX.position(300, height + 50);
  detailX.style('width', '800px');
}

function draw() {
  background(0);
  rotateY(millis() / 1000);
  rect(400, detailX.value(), 160,700);
  rect(20, detailX.value(), 300,100);
  rect(100, 200, 200,100);
}