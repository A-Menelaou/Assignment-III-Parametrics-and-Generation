function setup(){

    createCanvas(1000, 1000); // width, height
    background( 200, 150, 170); // rgb

    var i = 0;
    

    stroke(0);
    fill(255);
  

    noStroke();
    fill(212, 237,199);
    rect(100, 100, 50, 500); // left, top, width, height

   
    noStroke();
    fill(212, 237,199);
    rect(100, 100, 300, 50);

    noStroke();
    fill(212, 237,199);
    rect(100, 200, 300, 50);

}

function draw(){
    stroke(random(255),random(255),random(255));
    noFill(0);
    var rad = random(100) * 2;
    ellipse(mouseX,mouseY, rad, rad);
}

/*function mousePressed(){
    
    saveCanvas("sketch-01","png")
}*/