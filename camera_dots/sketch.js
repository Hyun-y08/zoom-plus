let capture
let cacheGraphics
let noiseTexture

function preload() {
	noiseTexture = loadImage('noiseTexture.jpg')
}

function setup() {
	createCanvas(640, 480);
	background(100);
	capture = createCapture(VIDEO)
	capture.size(640,480)
	cacheGraphics = createGraphics(640,480)
	cacheGraphics.translate(640,0)
	cacheGraphics.scale(-1,1)
 	capture.hide()
}


let mode = 1
function draw() {
	cacheGraphics.image(capture,0,0)
	noStroke()
	// scale(2)
	
	background(0)
	let span = 10 + max(mouseX,0)/20
	for(let i=0;i<cacheGraphics.width;i+=span) {
		for(let j=0;j<cacheGraphics.height;j+=span) {
			let pixel = cacheGraphics.get(i,j)
			let bk = (pixel[0]+pixel[1]+pixel[2])/3
			fill(255)
			if(mode==1) {
				ellipse(i,j,span*map(bk,0,255,0,1))
			}
			if(mode==2) {
				fill(pixel)
				push()
					colorMode(HSB)
					fill(pixel[0],100,100)
					translate(i,j)
					rectMode(CENTER)
					rotate(pixel[0]/100)
					rect(0,0,span*0.3+pixel[2]/10)
					fill(0)
					ellipse(0,0,5)
				pop()
			}
			
		}

	}
	
	push()
		blendMode(MULTIPLY)
		scale(2)
		image(noiseTexture,0,0)
	pop()
}

function keyPressed() {
	if (key=='1') {
		mode = 1
	}
	if (key=='2') {
		mode = 2
	}

}