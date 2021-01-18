var canvas;
var music;
var box;
var redRectangle;
var blueRectangle;
var greenRectangle;
var yellowRectangle;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box=createSprite(400,300,40,40);
    box.shapeColor="white"
    box.velocityX=8;
    box.velocityY=8;
    redRectangle=createSprite(100,590,200,30);
    redRectangle.shapeColor="red";
    blueRectangle=createSprite(300,590,200,30);
    blueRectangle.shapeColor="blue";
    greenRectangle=createSprite(500,590,200,30);
    greenRectangle.shapeColor="green";
    yellowRectangle=createSprite(700,590,200,30);
    yellowRectangle.shapeColor="yellow";
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);
    music.play();
    //create edgeSprite
    if(box.isTouching(redRectangle)){
    box.shapeColor="red";
    music.stop();
    }
    if(box.isTouching(blueRectangle)){
    box.shapeColor="blue";
    music.stop();
    }
    if(box.isTouching(greenRectangle)){
    box.shapeColor="green"
    music.stop();
    }
    if(box.isTouching(yellowRectangle)){
    box.shapeColor="yellow"
    music.stop();
    }

    drawSprites();
    //add condition to check if box touching surface and make it box
}
