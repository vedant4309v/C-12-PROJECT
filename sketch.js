var RUNNING,ROAD,Runner,


function preload(){
  //pre-load images
  RUNNING = loadAnimation("Runner-1.png","Runner-2.png");
  ROAD = loadAnimation("path");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  Runner = createSprite(50,160,20,50);
  Runner.addAnimations("Runner-1.png","Runner-2.png")
  Runner.scale = 0.5

  Road = createSprite(200,180,400,50);
  Road.addAnimations("path.png");
}

function draw() {
  background(0);

}
