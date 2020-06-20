var ground, paper ,binl,bind,binr;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,420,20);

	binl = new Dustbin(1090,650,20,100);
	bind = new Dustbin(1200,680,200,20);
	binr = new Dustbin(1300,650,20,100);
	
	ground = new Ground(600,height,1600,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();

  binl.display();
  bind.display();
  binr.display();

  ground.display();

  jump();
  
  drawSprites();
 
}

function jump(){
   if (keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20})

   }
}



