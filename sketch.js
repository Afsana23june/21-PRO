var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);
	engine = Engine.create();
	world = engine.world;


	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	} 

	

	
	var ground_options ={
		isStatic: true
	  };

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	leftside = Bodies.rectangle(1100,560,20,200,ground_options);
	World.add(world,leftside);

	rightside = Bodies.rectangle(1350,560,20,200,ground_options);
	World.add(world,rightside);



	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,670,width,20);
	//leftside=new Ground(110,600,20,20);
	Engine.run(engine);
	//650,560,20,200

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(leftside.position.x,leftside.position.y,20,200);
  rect(rightside.position.x,rightside.position.y,20,200);
  ellipse(ball.position.x, ball.position.y,20);
  ground.show();

  drawSprites();
 
}

function hForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:95,y:-95});	
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		hForce();
		
	}
}



