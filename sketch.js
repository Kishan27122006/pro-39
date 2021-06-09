var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var bike1,bike2,bikes;
var bike1_img,bike2_img

function preload(){
  bike1_img=loadImage("images/bike1.png")
  bike2_img=loadImage("images/bike2.png")

}

function setup(){
  createCanvas(displayWidth,displayHeight)
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
  if(gameState === 2){
    game.end();
  }
}
