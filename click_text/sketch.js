var contents = "";
let x;
let y;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0,255,0);
  // fill(255);
  textSize (30);
  text(contents, x, y);
}

function mousePressed() {
  contents = "";
  displayText = "hello";
  x = mouseX;
  y = mouseY;
}

function keyTyped() {
  contents+=key;
}