var letterF;
var letterFTwo;
var letterFThree;
var letterFFour;
var width = 1000;
var height = 1000;

function setup(){

    createCanvas(1000, 1000); // width, height
    background(0); // rgb
    var letterFX = random(0, width);
    var letterFY = random(0, height);
    letterF = new LetterF(100, 500);
    letterFTwo = new LetterF(300,500);
    letterFThree = new LetterF( 500, 500);
    letterFFour = new LetterF( 700, 500);


}

function draw(){
    background(255, 204, 41);
    letterF.display();
    letterFTwo.display();
    letterFThree.display();
    letterFFour.display();
}

function mouseMoved(){
    letterF.grow();
    letterFTwo.grow();
    letterFThree.grow();
    letterFFour.grow();
}

/*function mouseClicked(){

    letterF.click();
    letterFTwo.click();
    letterFThree.click();
    letterFFour.click();
}*/

class LetterF { // set initial values of letter F
    constructor(x, y){
        this.stemX = x;
        this.stemY = y;
        this.stemH = 100;
        this.stemW = 40;
        this.stemOY = y;
    }

    display(){
        fill(255,0,25);
        rect(this.stemX,this.stemY,this.stemW,this.stemH); //draw stem
        rect(this.stemX,this.stemY + this.stemY / 2,100,40);
        fill( 255,0,25);
        rect(this.stemX,this.stemY + this.stemY / 5,150,40);
        
    }

    grow(){
        this.stemY = this.stemY -1;
        this.stemH = this.stemH + 1;
    }
    /*clip(){
        this.stemH = 200;
        this.stemY = this.stemOY;
    }*/
}
