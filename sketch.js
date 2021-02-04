var garden ,  gardenImg;
var cat, cat_sit, cat_run, cat_stop;
var mouse, mouse_stand, mouse_call, mouse_stop;

function preload() {
    //load the images here
    gardenImg =loadImage("garden.png");
    cat_sit= loadImage("cat1.png");
    cat_run = loadImage("cat2.png,cat3.png");
    cat_stop= loadImage("cat4.png");
    mouse_stand = loadImage("mouse1.png","mouse1.png","mouse1.png","mouse1.png","mouse2.png","mouse2.png","mouse2.png","mouse2.png");
    mouse_call = loadImage("mouse3.png");
    mouse_stop = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite("500,400,20,20");
    garden.addAnimation("bagicha",gardenImg);

    cat = createSprite("500,400,20,20");
    cat.debug = false;
    cat.addAnimation("billi",cat_sit);

    mouse = createSprite("600,300,30,30");
    mouse.debug = false;
    mouse.addAnimation("chuha",mouse_stand);
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    myOwnIsTouching();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === leftArrow){
    cat.velocityX = -5;
    cat.changeAnimation("run",cat_run);
}
text(mouseX +';' + mouseY,10, 45);

}

function myOwnIsTouching(){

    sumX = cat.width/2 + mouse.width/2; 
    sumY = cat.height/2 + mouse.height/2; 
  
    text(sumX, 20,20); 
    text(cat.x,20,30);
    text(mouse.x,20,40); 
    text(cat.x - mouse.x,20,50);
  
    if (cat.x - mouse.x < sumX && mouse.x - cat.x < sumX && 
      cat.y - mouse.y < sumY && mouse.y - cat.y < sumY){
      
        cat.changeAnimation("stop",cat_stop);
        mouse.changeAnimation("stop",mouse_stop)
    } else{
      cat.changeAnimation("sit",cat_sit);
      mouse.changeAnimation("call",mouse_call);
    }
  }
