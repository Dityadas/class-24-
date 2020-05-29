const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var pig1,log1;
var box3,box4;
var log2,pig2;
var log3,log4,box5;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(850,320,50,50);
    box2 = new box(980,320,50,50);
    ground = new Ground(600,390,1200,20);
    pig1 = new pig(920,320);
    log1 = new log(920,300,PI/2,180);
    box3 = new box(850,280,50,50);
    box4 = new box(980,280,50,50);
    pig2 = new pig(920,280);
    log2 = new log(920,250,PI/2,180);
    log3 = new log(900,220,PI/6,120);
    box5 = new box(920,210,40,40);
    log4 = new log(850,220,-PI/6,120);
    bird = new Bird(200,200);
}

function draw(){
    background(0);
    text(mouseX+","+mouseY,5,20);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    box3.display();
    box4.display();
    box5.display()
    log3.display();
    log4.display();
    bird.display();
}