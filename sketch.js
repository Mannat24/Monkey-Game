
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  monkey.velocityX = 1;
  
  
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
  
  
  
  

  
}


function draw() {
  background("lightBlue");
  
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime:"+ survivalTime,100,50);
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocity = 0;
    
  }
  
  
  
  
  obstacles();
  
  bananas();
  
  drawSprites();

  
}
function bananas(){
  if(World.frameCount%80 === 0){
    var banana = createSprite(400,100,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -8;
    
    banana.lifetime = 200;
    
    foodGroup.add(banana);
    
    
  }
}
function obstacles(){
  if(World.frameCount%60 === 0){
    var obstacle = createSprite(400,320,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -8;
    
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
    
    
  }
}






