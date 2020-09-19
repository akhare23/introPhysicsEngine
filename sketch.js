//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground ;
var box1,box2;

function setup() {
  createCanvas(400,400);


  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,380,400,20);
  box1 = new Box(200,200,50,50);
  box2 = new Box(240,100,50,80);

}

function draw() {
  background(0);  

  Engine.update(engine);
  
  box1.display();
  ground.display();
  box2.display();
}