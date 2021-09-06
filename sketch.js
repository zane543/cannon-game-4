const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var eagle;
var cannon;
var stickman, stickManRunning;
var cage;
var bg;

var c1,c2,c3,c4,c5,c6,c7,c8;
var e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13;
var st1,st2,st3,st4,st5,st6;

var world,engine;

function preload(){

  bg = loadImage("background.png"); 
}

function setup(){
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
  world = engine.world;

  stickman = new Stickman(650,320,100,100);

  cage = new Cage(650,250,200,330);

  cannon = new Cannon(300,650,300,200)
  

    
}

function draw(){
  background(bg);

  stickman.display();
  cage.display();
  cannon.display();

}

function keyPressed(){

  if(keyCode === 32){
    bullet = new Bullets(320,670,50,50);
  }
}
