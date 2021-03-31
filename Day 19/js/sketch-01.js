//reference: https://p5js.org/reference/#/p5/text

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background('pink');
  textSize(32);
  
  for( var x = 50; x < width ; x = x+100){
     for (var y = 50 ; y < height ; y = y+100){
  
       fill(100, x-50, 200)
    rect(x-20 ,y,40 , 10)
     }
      
    }
      for( var x = 50; x < width ; x = x+100){
     for (var y = 80 ; y < height ; y = y+100){
  
       fill(100, x-50, 200)
    rect(x-20 ,y,30 , 10)
     }
      
    }
    
    for( var x = 50; x < width ; x = x+100){
     for (var y = 50 ; y < height ; y = y+100){
  
       fill(200, x-50, 100)
    rect(x-20 ,y,10 , 60)
     }
      
    }
  
textSize(400);
text('F', 440, 300);
fill(0, 102, 153);
text('F', 440, 650);
fill(0, 102, 153, 51);
text('F', 440, 990);
  
  for(var x = 0; x <= width; x+=20){
        console.log(x);
        for(var y = 0; y<= height; y+=20){
        console.log(y);
        fill(212, 237,199);
            ellipse(x, y, 10, 10);
  }
 }
  
}