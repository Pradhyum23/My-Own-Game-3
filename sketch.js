var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var Animals, Animal1, Animal2, Animal3, Animal4;

var track, Animal1_img,  Animal2_img,  Animal3_img,  Animal4_img;

function preload(){
  track = loadImage("Track.jpg");
  Animal1_img = loadAnimation("Animal1walk.png","Animal1.png");
   Animal2_img = loadAnimation("Animal2.jpg","Animal2walk.jpg");
   Animal3_img = loadAniamtion("Animal3.jpeg","Animal3walk.jpeg");
   Animal4_img = loadAniamtion("Animal4.jpeg","Animal4walk.jpeg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
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
