//create global variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground,invisibleGround;
var survivalTime=0;
function preload(){
  
  //preload images
monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  //create monkey sprite
  monkey=createSprite(100,340,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  //create ground sprite
  ground=createSprite(400,350,800,10);
  ground.velocityX=-10;
   ground.x = ground.width /2;
  //create groups
  bananaGroup= createGroup();
    obstaclesGroup=createGroup();
  
  
}


function draw() {
background("lightblue");
  //display survival time
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(getFrameRate()/0);
  text("Survival Time:"+survivalTime,100,50);
  
  if(keyDown("space")&& monkey.y >= 220) {
     monkey.velocityY=-10;
     }
  monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground);
  
  
       
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  //call function food and obstacles
  food();
  spawnobstacle();
  
  drawSprites();
}
//create functions
function food() {
if (frameCount % 80 === 0) {
  banana = createSprite(300,300,40,10);
  banana.y = Math.round(random(120,200));
 banana.addImage("banana",bananaImage);
  banana.scale=0.05;
  banana.velocityX=-4;
  banana.lifetime = 200;
  bananaGroup.add(banana);
}
}
function spawnobstacle(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,340,10,40);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale=0.15;
    obstacle.lifetime=400
    obstacle.collide(ground);
    obstacle.velocityX=-4;
     obstaclesGroup.add(obstacle);
     
 
}
}














