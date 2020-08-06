var fixedRect,MovingRect



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 150, 50);
  fixedRect=createSprite(400,150,50,100);
fixedRect.shapeColor ="green";
  MovingRect = createSprite(500,150,50,30);
  MovingRect.shapeColor = "green";
}

function draw() {
  background("black");  
MovingRect.y=World.mouseY
MovingRect.x=World.mouseX
console.log (MovingRect.x-fixedRect.x);
console.log(MovingRect.width/2+fixedRect.width/2);

if(MovingRect.x-fixedRect.x <MovingRect.width/2+fixedRect.width/2 
  && fixedRect.x - MovingRect.x  <MovingRect.width/2+fixedRect.width/2
  && fixedRect.y - MovingRect.y   <MovingRect.height/2+fixedRect.height/2
  && MovingRect.y - fixedRect.y   <MovingRect.width/2+fixedRect.width/2
   ){
  MovingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else {
  MovingRect.shapeColor="Green";
  fixedRect.shapeColor = "green";
}
  drawSprites();
}
