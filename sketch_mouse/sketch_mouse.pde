int r = 0;
int b = 0;
int g = 0;
PImage B;

void setup() {
size(1000, 600);
background(0,255,0);
//B = loadImage("bostonmap.jpg");
//image(B, 0, 0);
}

void draw() {
  if(mousePressed==true && mouseButton==LEFT){
    strokeWeight(5);
    stroke(r, g, b);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  if(mousePressed==true && mouseButton==RIGHT){
    strokeWeight(15);
    stroke(0,255,0);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  if(keyPressed){
    if (key == 'r') {
      r = 255;
      g = 0;
      b = 0;
    }
    if (key == 'g') {
      r = 0;
      g =2550;
      b = 0;
    }
    if (key == 'b') {
      r = 0;
      g = 0;
      b = 255;
    }
    if (key == 'c') {
      r=0;
      g=0;
      b=0;
    }
  }
}

void keyPressed() {
  if (key=='a') {
    background(0,255,0);
  }
  if (key=='s') {
    save("sketch.jpg");
  }
}
