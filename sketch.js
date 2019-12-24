var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}


/*var frect,mrect;

function setup() {
  createCanvas(1200,800);
  frect=createSprite(200, 200, 50, 80);
  mrect=createSprite(400,200,80,30);
  mrect.shapeColor="orange";
  frect.shapeColor="orange";

  mrect.debug=true;
  frect.debug=true;

  mrect.velocityY=-5;
  frect.velocityY=+5;
}

function draw() {
 background(0,0,0);  


  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

if(mrect.x-frect.x<frect.width/2+mrect.width/2
  && frect.x-mrect.x<frect.width/2+mrect.width/2
  && mrect.y-frect.y<frect.height/2+mrect.height/2
  && frect.y-mrect.y<frect.height/2+mrect.height/2){
  mrect.shapeColor="red";
  frect.shapeColor="red";
}
else{
  mrect.shapeColor="orange";
  frect.shapeColor="orange";
}

if(mrect.x-frect.x<frect.width/2+mrect.width/2
  && frect.x-mrect.x<frect.width/2+mrect.width/2){
    mrect.velocityX=mrect.velocityX*(-1);
    frect.velocityX=frect.velocityX*(-1);
  }
  if( mrect.y-frect.y<frect.height/2+mrect.height/2
   && frect.y-mrect.y<frect.height/2+mrect.height/2){
    mrect.velocityY=mrect.velocityY*(-1);
    frect.velocityY=frect.velocityY*(-1);
   }

  drawSprites();
}*/