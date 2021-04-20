var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(0, 200, 50, 10);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");
  wall.shapeColor=color(80,80,80)
  bulletWeight=weight;
  bulletSpeed=speed;
}

function draw() {
  background(0,0,0); 
  

    if (hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
    
  
      if(damage>10){
        wall.shapeColor=color(255,0,0)
      }
  
      if(damage<10){
        wall.shapeColor=color(0,255,0)

    }

   
  
  drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}}