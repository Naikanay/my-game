var bg, bgImg;
var sophie;
var sophieRunning;
var sophieStanding;
var cactus, cactusImg, cactusGroup;

function preload(){
  bgImg = loadImage("assets/long_background.jpg");
  sophieRunning = loadAnimation("assets/frame1running.png","assets/frame2running.png","assets/frame3running.png","assets/frame4running.png","assets/frame5running.png","assets/frame6running.png");
  sophieStanding = loadAnimation("assets/frame2running.png");
  cactusImg = loadImage("assets/cactus.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,height/2);
  bg.addImage(bgImg);
  bg.scale = 2.8;
  sophie = createSprite(80,560);
  sophie.addAnimation("sophieStanding",sophieStanding);
  sophie.addAnimation("sophieRunning",sophieRunning);
}

function draw(){
  background("blue");
  bg.velocityX = -0.000000001
  if(keyDown(RIGHT_ARROW)){
    sophie.changeAnimation("sophieRunning");
    bg.velocityX = -10
  }
  if(bg.x < 20){
    bg.x = bg.width/2;
  }
  spawnCactus();
  drawSprites();
}
function spawnCactus() {
  //write code here to spawn the clouds
   if (frameCount % 100 === 0) {
     cactus = createSprite(width,height-200);
   // cactus.y = Math.round(random(10,60));
    cactus.scale = 0.5;
    cactus.velocityX = -3;
    cactus.addImage("cactusImage",cactusImg);
    
    //adjust the depth
    cactus.depth = sophie.depth;
    sophie.depth = sophie.depth + 1;
    }
}

