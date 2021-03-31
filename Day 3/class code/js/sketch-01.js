var flower;
var flowerTwo;
var flowerThree;
var flowerFour;
var width = 500;
var height = 500;

function setup(){

    createCanvas(500, 500); // width, height
    background(0); // rgb
    var flowerX = random(0, width);
    var flowerY = random(0, height);
    flower = new Flower(random (500), random (500));
    flowerTwo = new Flower(flowerX,flowerY);
    flowerThree = new Flower(random (500), random (500));
    flowerFour = new Flower(random (500), random (500));


}

function draw(){
    background(188, 204, 41);
    flower.display();
    flowerTwo.display();
    flowerThree.display();
    flowerFour.display();
}

function mouseMoved(){
    flower.grow();
    flowerTwo.grow();
    flowerThree.grow();
    flowerFour.grow();
}

function mouseClicked(){

    flower.clip();
    flowerTwo.clip();
    flowerThree.clip();
    flowerFour.clip();
}

class Flower { // set initial values of flower
    constructor(x, y){
        this.stemX = x;
        this.stemY = y;
        this.stemH = 200;
        this.stemW = 10;
        this.stemOY = y;
    }

    display(){
        fill(41,204,60);
        rect(this.stemX,this.stemY,this.stemW,this.stemH); //draw stem
        rect(this.stemX,this.stemY + this.stemY / 2,80,40);
        fill( 199,32,152);
        ellipse( this.stemX,this.stemY,100);
        fill(201,161,190);
        ellipse( this.stemX,this.stemY,40);

    }

    grow(){
        this.stemY = this.stemY -1;
        this.stemH = this.stemH + 1;
    }
    clip(){
        this.stemH = 200;
        this.stemY = this.stemOY;
    }
}
