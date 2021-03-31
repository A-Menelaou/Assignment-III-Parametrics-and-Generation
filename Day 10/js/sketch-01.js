//https://editor.p5js.org/melisa_cald/sketches/ByTJgzS2Z original code

function setup() { 
    createCanvas(1000, 1000);
    
  } 
  
  function draw() {
    background(255)
    
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
    
  }