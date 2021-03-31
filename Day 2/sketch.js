var lerpframe = 0;
var islerping = false;

function setup(){
    createCanvas(1000, 1000);
    colorMode(HSB);
    blendMode(DIFFERENCE);
}

function draw(){
    background(212, 237,199);
    rect(mouseX, mouseY, 100,100);

    if(islerping){
        if(lerpframe < 60){
            fill( lerpColor(color('Red'), color('Green'), lerpframe/60 ));
            lerpframe++; 
        }else{
            lerpframe = 0;
            islerping = false;
        }
    }
}

function mousePressed(){
    
    islerping = true;
}