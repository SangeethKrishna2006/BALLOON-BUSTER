 var PLAY = 1;
 var END  = 0;
 var gameState = PLAY;

 var bow , arrow,  background;
 var bowImage, arrowImage, green_balloonImage,  red_balloonImage, pink_balloonImage,blue_balloonImage,  backgroundImage;

 var score ;

 var lines;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage= loadImage("blue_balloon0.png");
  green_balloonImage=loadImage("green_balloon0.png");
  pink_balloonImage=loadImage("pink_balloon0.png");
  
  score = 0;
  
}

function setup() {
  
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  lines = createSprite(400,200,5,400);
  lines.visible=false;
  
  redsGroup = createGroup();
  bluesGroup= createGroup();
  pinksGroup= createGroup();
  greenGroup= createGroup();
  arrowsGroup=createGroup();
  
}

function draw() {
   background(0); 
  
  if(gameState===PLAY){
  
   // moving ground
   scene.velocityX = -3 

 if (scene.x < 0){
     scene.x = scene.width/2;
 }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
 if (keyDown("space")) {
    createArrow();
 }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
      
    } else if (select_balloon == 2){
      blueBalloon();
      
    } else if (select_balloon == 3){
      pinkBalloon();
      
    } else if (select_balloon == 4){
      greenBalloon();
    }
}
  
  if(arrowsGroup.isTouching(redsGroup)){
    score = score+1;
    redsGroup.destroyEach();
    arrowsGroup.destroyEach();
  }
  
  if(arrowsGroup.isTouching(bluesGroup)){
    score = score+1;
    bluesGroup.destroyEach();
    arrowsGroup.destroyEach();
  }
  
  if(arrowsGroup.isTouching(pinksGroup)){
    score = score+1;
    pinksGroup.destroyEach();
    arrowsGroup.destroyEach();
  }
  
  if(arrowsGroup.isTouching(greenGroup)){
    score = score+1;
    greenGroup.destroyEach();
    arrowsGroup.destroyEach();
  }
    
    if(redsGroup.isTouching(lines)){
      redsGroup.destroyEach();
      gameState = END;
    }
    
    if(greenGroup.isTouching(lines)){
      greenGroup.destroyEach();
      gameState = END;
    }
    
    if(bluesGroup.isTouching(lines)){
      bluesGroup.destroyEach();
      gameState = END;
    }
    
    if(pinksGroup.isTouching(lines)){
      pinksGroup.destroyEach();
      gameState = END;
    }
    
  }
  
  drawSprites();

    if(gameState===END){
     fill("red");
     textSize(25);
     text("press ENTER to restart",100,200);
     score=0;
     scene.velocityX=0;
     if(keyDown("enter")){
       gameState=PLAY;
     }
   }
   
  fill("red");
  textSize(20);
  text("score :  " + score ,20,20);
  
}


// Creating  arrows for bow
function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowsGroup.add(arrow);
}


function redBalloon() {
  var red = 
  createSprite(0,Math.round(random(20, 370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150; 
  red.scale = 0.1;
  redsGroup.add(red);

}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue =  createSprite(0,Math.round(random(20,380)),10,10);
 blue.addImage(blue_balloonImage);
 blue.velocityX = 3;
 blue.lifetime = 150;
 blue.scale = 0.1;
 bluesGroup.add(blue);
}

function pinkBalloon() {
  //write code for spwaning green balloons
  var pink = 
  createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX=3;
  pink.lifetime=150;
  pink.scale=1.3;
  pinksGroup.add(pink);
}

function greenBalloon() {
  //write code for spwaning pink balloons
  var green = 
  createSprite(0,Math.round(random(20,380)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX=3;
  green.lifetime=150;
  green.scale=0.1;
  greenGroup.add(green);
}
