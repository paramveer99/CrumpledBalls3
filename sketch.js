
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;

function preload(){
	
}

function setup() {
	createCanvas(1600, 800);
	rect1= Bodies.rectangle(450,290,200,20,{restitution:1,isStatic:true}   );
	rect2=Bodies.rectangle(480,250,20,100,{isStatic:true});
	rect3=Bodies.rectangle(500,250,20,100,{isStatic:true});
	fill("red");
 
	

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(50,150,20);
	ground1 = new Ground(400,height,1600,40);
	dustbin = new Dustbin(600,650,200,250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display();
  ground1.display();
  dustbin.display();
  rect(600,780,220,20);
  rect(700,640,20,260);
  rect(500,640,20,260);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-75});	
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    paper1.fly();
}

