var i;
var p;
let myBool = false;
ley myBool2 = false;



function setup(){

    createCanvas(1000, 1000); // width, height
    background( 255,100,176); // rgb
    i = 0;
    p = 0;
}

    function draw() {

    if (i < 360 && myBool == true) {
        push();
        translate(200,200)
        rotate(i);
        noFill();
        stroke(0);
        rect(0,0,100,100);
        pop();
        i++;
    }
      if (p <=)  
        push();
        noFill();
        stroke(0);
        
