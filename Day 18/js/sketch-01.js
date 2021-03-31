//reference: https://editor.p5js.org/slow_izzm/sketches/ByOUeWVjX

let _text;

function setup() {
  createCanvas(1000,1000, WEBGL);

  _text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
  _text.textFont('Source Code Pro');
  _text.textAlign(CENTER);
  _text.textSize(1500);
  _text.fill('green');
  _text.noStroke();
  _text.text('F', width * 1, height * 1);
}

function draw() {
  background('purple');
  noStroke();
  texture(_text);
  rotateY(millis() / 1000);
  rotateX(millis() / 1000);
  plane(window.innerWidth - 4, window.innerHeight - 4);
}