https://editor.p5js.org/sozamb/sketches/Hh-No9-Jm original code

function setup() {
    createCanvas(1000, 1000);
    }
    
    function draw(){
    background(255,0,0);
      noStroke();
    
        for(var x = 0; x <= width; x+=20){
        console.log(x);
        for(var y = 0; y<= height; y+=20){
        console.log(y);
        fill(212, 237,199);
            ellipse(x, y, 20, 20);
    
          
    }
    } 
    
        noStroke();
        fill(212, 237,199);
        rect(300, 100, 100, 800); // left, top, width, height
    
       
        noStroke();
        fill(212, 237,199);
        rect(300, 100, 500, 100);
    
        noStroke();
        fill(212, 237,199);
        rect(300, 400, 450, 100);
      
      
    
      
    
    
    
    
    }
    