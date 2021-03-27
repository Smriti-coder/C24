const Engine = Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies

var engine,world,obj1;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
 box1 = new Box(200,5,70,70)
 box2 = new Box(203,3,57,57);

 ground1 = new Ground(10, 390, 800, 10);


console.log(box1);
  
}

function draw() {
  Engine.update(engine);
  background(255,255,255); 
  background("orange");  

  box1.display();
  box2.display();
  ground1.display();
  



}