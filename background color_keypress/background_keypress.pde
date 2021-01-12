int r = 0;
int b = 0;
int g = 0;

void setup() {
//fullScreen();
size(1000, 600);
fill(255,255,255);
}

void draw() {
  background(r, g, b);
  if (keyPressed) {
    if (key == 'r') {
       if (r==255)
         {r = 255;}
      else
        {r+=1;}
    }
    if (key == 'R') {
      if (r==0)
         {r = 0;}
      else
        {r-=1;}
    }
    if (key == 'g') {
       if (g==255)
         {g = 255;}
      else
        {g+=1;}
    }
    if (key == 'G') {
      if (g==0)
         {g = 0;}
      else
        {g-=1;}
    }
    if (key == 'b') {
      if (b==255)
         {b = 255;}
      else
        {b+=1;}
    }
    if (key == 'B') {
      if (b==0)
         {b = 0;}
      else
        {b-=1;}
    }
    if (key == 'c') {
      r=0;
      g=0;
      b=0;
  }
}
  //String[] fontList = PFont.list();
  //String fontName;
  //fontName = fontList[2];
  //PFont myFont;
  //myFont = createFont(fontName, 22);
  //textFont(myFont);
  //stroke(255, 255, 255);
  //textSize(15);
  //text("r: " + r, 100, 500);
  //text("g: " + g, 100, 520);
  //text("b: " + b, 100, 540);
}
