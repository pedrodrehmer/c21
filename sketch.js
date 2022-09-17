const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var little_wall
var little_wall2


function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  
  little_wall=new Ground(500,380,10,140)
  little_wall2=new Ground(400,380,10,140)
  
  btn1=createImg("right.png")
  btn1.position(70,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce)

  // btn2=createImg("up.png")
  // btn2.position(20,30);
  // btn2.size(50,50);
  // btn2.mouseClicked(vForce)

  ground =new Ground(200,390,800,20);
  right = new Ground(590,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,800,20);
  var options={
    restitution:0.30

  }
  ball= Bodies.circle(200,100,20,options);
  World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  little_wall.show();
  little_wall2.show();
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}