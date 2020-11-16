var zenia, wall1;

var speed,  weight;


function setup() {
  createCanvas(1600,400);

 zenia = createSprite(50, 200, 50, 50);
 wall1 = createSprite(350,200,60, height/2);

  speed =  random(55,90)
  weight = random(400,1500)

  
}

function draw() {
  background(255,255,255);  

  zenia.velocityX = speed;

if (wall1.x - zenia.x < (zenia.width + wall1.width)/2)
{
  zenia.velocityX = 0;
  var deformation = 0.5 * width * speed * speed/22509;
  if (deformation > 180)
  {
    zenia.shapeColor = color(250,0,0);
  }

  if (deformation < 180 && deformation > 100)
  {
    zenia.shapeColor = color(230,230,0)
  }

  if (deformation < 100)
  {
    zenia.shapeColor(0,255,0);
  }
}


  drawSprites();
}