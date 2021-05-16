var backgroundImage, database;
var gameState=0,playerCount;
var form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
  hypnoticBall = createSprite(250,250,10,10);
  
}

function draw(){

}

