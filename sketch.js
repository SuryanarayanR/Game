var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30;
var wallGroup,guard1,guard2,guard3,player, key;
var gameState="play",keyflag=0; 


function preload(){
   soldierf = loadAnimation("images/soldierFront1.png","images/soldierFront2.png","images/soldierFront3.png");
   soldierb = loadAnimation("images/soldierBack1.png","images/soldierBack2.png","images/soldierBack3.png");
   soldierl = loadAnimation("images/soldierLeft1.png","images/soldierLeft2.png","images/soldierLeft3.png");
   soldierr = loadAnimation("images/soldierRight1.png","images/soldierRight2.png","images/soldierRight3.png");

   playerf = loadAnimation("images/playerFront1.png","images/playerFront2.png","images/playerFront3.png");
   playerb = loadAnimation("images/playerBack1.png","images/playerBack2.png","images/playerBack3.png");
   playerl = loadAnimation("images/playerLeft.png","images/playerLeft1.png","images/playerLeft2.png","images/playerLeft3.png");
   playerr = loadAnimation("images/playerRight.png","images/playerRight1.png","images/playerRight2.png","images/playerRight3.png");

   Key = loadImage("images/key.png");
   nightvisiong = loadImage("images/night vision g.png");


}


function setup() {
  createCanvas(1350,650);
  wallGroup = new Group();
  createWalls();

  //CHARACTERS
  createGuards();

  key = createSprite(950,40, 10, 10);
  key.addImage("keys",Key);
  key.scale = 0.09;
  key.debug = true;

  nvg = createSprite(800,560,10,10);
  nvg.addImage("nightvg",nightvisiong);
  nvg.scale = 0.2;

  player = createSprite( 30, 620, 5, 20);
  player.addAnimation("front",playerf);
  player.addAnimation("back",playerb);
  player.addAnimation("left",playerl);
  player.addAnimation("right",playerr);

}

function draw() {
  background(0);  

  if(gameState === "play"){

    //CONTROLS OF THE PLAYER
    if(keyDown(UP_ARROW)){
      player.y = player.y-10;
      player.changeAnimation("back");
    }
    if(keyDown(DOWN_ARROW)){
      player.y = player.y+10;
      player.changeAnimation("front");
    }
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x+10;
      player.changeAnimation("right");
    }
    if(keyDown(LEFT_ARROW)){
      player.x = player.x-10;
      player.changeAnimation("left");                                                
    }
    player.collide(wallGroup);
    

    guard1.guardMovingAnimation();
    guard1.followPlayer();
    guard2.guardMovingAnimation();
    guard2.followPlayer();
    guard3.guardMovingAnimation();
    guard3.followPlayer();
    guard4.guardMovingAnimation();
    guard4.followPlayer();
    guard5.guardMovingAnimation();
    guard5.followPlayer();
    guard6.guardMovingAnimation();
    guard6.followPlayer();
    guard7.guardMovingAnimation();
    guard7.followPlayer();
    guard8.guardMovingAnimation();
    guard8.followPlayer();
    guard9.guardMovingAnimation();
    guard9.followPlayer();
    guard10.guardMovingAnimation();
    guard10.followPlayer();

    //KEY
   /* 
    if(player.isTouching(key)){
      key.destroy();
      keyflag = 1;
    }*/
    if(keyflag === 1){
      image(Key,20,10,25,20)
    }
  }

  drawSprites();
}