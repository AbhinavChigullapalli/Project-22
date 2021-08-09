
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var left,right

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1
	}
    
	fill("yellow")
	ball = Bodies.circle(100,200,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);

	ground = new Ground(400,300,800,20)
    left = new Ground(600,250,10,100)
	right = new Ground(700,250,10,100)
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine)

  ground.show()
  left.show()
  right.show()

  ellipse(ball.position.x,ball.position.y,20)

  if(keyDown("UP_ARROW")){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:2, y:-5})
  }
  
  drawSprites();
}



