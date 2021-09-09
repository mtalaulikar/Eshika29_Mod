const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

  PolygonImg = loadImage("Images/dora3.png");
  nobitaImage = loadImage("Images/nobita1.png")
}

function setup() {
  createCanvas(990,500);

  engine = Engine.create();
	world = engine.world;

  polygon = Bodies.circle(50,200,20);
  World.add(world , polygon);

  Engine.run(engine);

  slingshot = new Slingshot(this.polygon,{x:100,y:150});

  ground = new Ground(500,489,1000,20);

  stand1 = new Ground(400,300,250,20);

  block1 = new Block(327,285,30,40);
  block2 = new Block(335,285,30,40);
  block3 = new Block(355,285,30,40);
  block4 = new Block(398,285,30,40);
  block5 = new Block(428,285,30,40);
  block6 = new Block(458,285,30,40);
  block7 = new Block(488,285,30,40);

  block8 = new Block(335,110,30,40);
  block9 = new Block(368,110,30,40);
  block10 = new Block(398,110,30,40);
  block11 = new Block(430,110,30,40);
  block12 = new Block(460,110,30,40);

  block13 = new Block(367,50,30,40);
  block14 = new Block(397,50,30,40);
  block15 = new Block(430,50,30,40);
  
  block16 = new Block(397,10,30,40);

  stand2 = new Ground(770,200,200,20);

  rblock1 = new Block(710,120,30,40);
  rblock2 = new Block(740,120,30,40);
  rblock3 = new Block(770,120,30,40);
  rblock4 = new Block(800,120,30,40);
  rblock5 = new Block(830,120,30,40);

  rblock6 = new Block(740,100,30,40);
  rblock7 = new Block(770,100,30,40);
  rblock8 = new Block(800,100,30,40);

  rblock9 = new Block(770,50,30,40);
  
}

function draw() {
  background(70,700,700);
  textSize(20);
  fill("red");
  text("Help Doremon to collect as many oranges as he can as Nobita is feeling too hungry", 200,50);
  imageMode(CENTER);
  image(PolygonImg,polygon.position.x,polygon.position.y, 100,100);
  image(nobitaImage,900,430,70,100);

  slingshot.display();

  ground.display();

  stand1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  stand2.display();

  rblock1.display();
  rblock2.display();
  rblock3.display();
  rblock4.display();
  rblock5.display();

  rblock6.display();
  rblock7.display();
  rblock8.display();

  rblock9.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}