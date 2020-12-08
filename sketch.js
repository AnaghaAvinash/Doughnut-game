var Puru,puruI;
var back,backI;
var doughnut,doughI,doi,doiIrock,rockI;
var score=0;
var donutGroup,doiGroup,rockGroup,gameI,bI,b;
var gameState="start";
var bondaI,bonda;

function preload(){

puruI = loadImage("puru.png");
backI = loadImage("back.png");
doughI = loadImage("dough.png");
doiI = loadImage("do.png");
rockI = loadImage("rock.png");
bI = loadImage("game-over.jpg");
bondaI = loadImage("bonda.png");

}


function setup() {

  createCanvas(windowWidth,windowHeight);

  Puru = createSprite(70,height-200,10,10); 

  b = createSprite(width-650,height-300,100,100);
  b.visible = false;

  bonda=createSprite(width/2,height/2);
  bonda.scale = 0.5;

  donutGroup = createGroup();
  doiGroup = createGroup();
  rockGroup = createGroup();
 
}


function draw() {

  background(0);  

  if(mousePressedOver(bonda)){
    gameState ="play";
  }

    
  bonda.addImage(bondaI);
   
   Puru.visible = false;
   b.visible = false;

 

 if(gameState=="play"){
  
  background(backI);

  Puru.addImage(puruI);
  Puru.scale = 0.7;
  Puru.x = mouseX;

  b.addImage(bI);
  b.scale = 1.3;

  Puru.visible = true;
  

 if(frameCount%50===0){
    doughnut = createSprite();
    doughnut.addImage(doughI);
    doughnut.scale = 0.15;
    doughnut.y = Math.round(random(0,100));
    doughnut.x = Math.round(random(0,1000));
    doughnut.velocityY = 8;
    doughnut.lifetime = 70;
    donutGroup.add(doughnut); 
  }

if(frameCount%150==0){
    doi = createSprite();
    doi.addImage(doiI);
    doi.scale = 0.2;
    doi.y = Math.round(random(0,100));
    doi.x = Math.round(random(0,2000));
    doi.velocityY = 8;
    doi.lifetime=70;
    doiGroup.add(doi);
    
    }

if(frameCount%120===0){
    rock = createSprite();
    rock.addImage(rockI);
    rock.scale = 0.3;
    rock.x = Math.round(random(0,2000));
    rock.y = Math.round(random(0,100));
    rock.velocityY = 6;
    rock.lifetime = 70;
    rockGroup.add(rock);
    
    }

  if(donutGroup.isTouching(Puru)){
      score = score+1;
      donutGroup.destroyEach();
    }

    if(doiGroup.isTouching(Puru)){
      score = score + 5;
      doiGroup.destroyEach();
    }

    bonda.destroy();

    Puru.setCollider("rectangle",0,-140,200,50);
     Puru.debug=false;

  }

  if(rockGroup.isTouching(Puru)){
     gameState = "over";
   
  }
  
  if(gameState =="over"){
     background("black");
     Puru.visible = false;
     b.visible = true;
     doiGroup.destroyEach();
     donutGroup.destroyEach();
     rockGroup.destroyEach();
     score =0;
  }

  if(mousePressedOver(b)){
    gameState="play";
  }
  
 
  drawSprites();
  textSize(20);
  fill(0);
  text("SCORE: "+score,width-140,40);
  

}

