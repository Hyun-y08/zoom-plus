let classifier;

let imageModelURL = 'https://teachablemachine.withgoogle.com/models/Nc47-XgTw/';


let video;
let flippedVideo;

let label = '';

let question;
let questionFade = 0;

let coffee;
let coffeeFade = 0;

let love;
let loveFade = 0;

let thumbsup1;
let thumbsup1Fade = 0;

let thumbsup2;
let thumbsup2Fade = 0;


function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  question = createVideo('question.mp4');
  coffee = createVideo('coffee.mp4');
  love = createVideo('love.mp4');
  thumbsup1 = createVideo('thumbsup1.mp4');
  thumbsup2 = createVideo('thumbsup2.mp4');
}


function setup() {
  createCanvas(960, 540);
  
  question.hide();
  question.loop();
  coffee.hide();
  coffee.loop();
  love.hide();
  love.loop();
  thumbsup1.hide();
  thumbsup1.loop();
  thumbsup2.hide();
  thumbsup2.loop();
  
  
  video = createCapture(VIDEO);
  video.size(960, 540);
  // video.hide();

  flippedVideo = ml5.flipImage(video);
  
  classifyVideo();
}

function draw() {
  background(0, 255, 0);
  imageMode(CORNER);

  if (label == 'question') {
    questionFade = 255;
  } else if (label == 'coffee') {
    coffeeFade = 255;
  } else if (label == 'love') {
    loveFade = 255;
  } else if (label == 'thumbsup1') {
    thumbsup1Fade = 255;
  } else if (label == 'thumbsup2') {
    thumbsup2Fade = 255;
  }

  if (questionFade > 0) {
    tint(255, questionFade);
    image(question, 0, 0, width/2, height/2);
    questionFade -= 10;
  }

  if (coffeeFade > 0) {
    tint(255, coffeeFade);
    image(coffee, 0, 0, width/2, height/2);
    coffeeFade -= 10;
  }

  if (loveFade > 0) {
    tint(255, loveFade);
    image(love, 0, 0, width, height);
    loveFade -= 10;
  }

  if (thumbsup1Fade > 0) {
    tint(255, thumbsup1Fade);
    image(thumbsup1, 0, 0, width/2, height/2);
    thumbsup1Fade -= 10;
  }

  if (thumbsup2Fade > 0) {
    tint(255, thumbsup2Fade);
    image(thumbsup2, 0, 0, width/2, height/2);
    thumbsup2Fade -= 10;
  }

}

function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

function gotResult(error, results) {

  if (error) {
    console.error(error);
    return;
  }

  label = results[0].label;

  classifyVideo();
}
