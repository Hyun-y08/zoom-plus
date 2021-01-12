var stickers = [];
var coffee = [];
var heart = [];
var time = [];
var up = [];
var down = [];

function preload() {
  coffee[0] = loadImage("coffee.png"); 
  heart[0] = loadImage("heart.png"); 
  up[0] = loadImage("up.png"); 
  down[0] = loadImage("down.png"); 
  time[0] = loadImage("time.png"); 
}

function setup() {
  cnv = createCanvas(600, 400);   
}

function mousePressed() {
  let r = floor(random(0, coffee.length));
  let b = new Sticker(mouseX, mouseY, coffee[r]);
  stickers.push(b);
}

function draw() {
  background(0,255,0);

  for (var i = stickers.length-1; i >= 0; i--) {
    stickers[i].update();
    stickers[i].display(); 
  }
}