var capture;
var captureMax = 100 ;

function preload () {											
  capture = createCapture(VIDEO);
  capture.size(900, 600);
 	capture.hide();
}

function setup() {
	createCanvas( 900,500);
	colorMode ( HSB, 255, 255, 255 );
	blendMode (LIGHTEST) ;			
	frameRate(50)
	}

function draw() {
	capture.loadPixels();							
	
	if (capture.length > captureMax) {
            capture.shift();                 
				 }
	
for (var i=0; i<1000; ++i) {
	
        var x = int(random(capture.width));
        var y = int(random(capture.height));
        var pix = (x + y*capture.width) * 4;				
        var col = capture.pixels.slice( pix, pix+6 );
				
				fill( col[0],col[1],col[2])
	 			stroke( col[0], col[1], col[2] );
				 //strokeWeight (1.5);
				rect( x , y ,10 ,10, random (30,60) ) ;	
	 			  
				} 
}