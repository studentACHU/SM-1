var wall;
var car;
var speed;
var weight;




function setup() {

  




  createCanvas(1600,400);  


 wall= createSprite(1400, 200, 50, 250);

 
  

  speed=random(55,90);

  car = createSprite(0, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";

  weight = random(400,1500);
}

function draw() {
  background("black"); 
  if(wall.x-car.x<(car.width/2+wall.width/2)){
   
    car.velocityX=0;

    var deform = (0.5*weight*speed*speed)/22500;

    if(deform<100){

      car.shapeColor="green";
    }

    if(deform<180&&deform>100){

      car.shapeColor="yellow";
    }

    if(deform>180){

      car.shapeColor="red";
    }
  } 
  drawSprites();
}