var bubarray = [];
var remarray = [];

function setup() {
  createCanvas(1000, 1000);


  for(var i = 0; i < 100; i++){
    x = random(0, width);
    y = random(0, height);
    speed = random(0.1,0.2);
    bub = new Bubble(x,y,speed);
    bubarray.push(bub);
  }

}
function Bubble(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
}

function draw() {
  
  background(255);

  moveBubbles();
  displayBubbles();
  
}

function moveBubbles(){
  for(var i = 0; i < bubarray.length; i++){
    bubarray[i].x = bubarray[i].x + bubarray[i].speed;
    bubarray[i].y = bubarray[i].y + bubarray[i].speed;
    if (bubarray[i].x > width || bubarray[i].y > height ){
      remarray.push(i);
    }
  }
  for(var i = 0; i < remarray.length; i++){
    bubarray.splice(remarray[i],1);
  }
  remarray=[];
}


function displayBubbles(){
  stroke(0);
  noFill();
  
  for(var i = 0; i < bubarray.length; i++){
    
    text('F', bubarray[i].x, bubarray[i].y);
  }

}

