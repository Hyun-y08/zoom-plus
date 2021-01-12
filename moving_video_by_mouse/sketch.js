function setup() {
	createCanvas(windowWidth,windowHeight);
	background(50);
	video = createCapture(VIDEO);
		video.size(100,50);
	
}

function draw() {
	image(video,mouseX,mouseY);
}

function mousePressed() {
  background(50);
}