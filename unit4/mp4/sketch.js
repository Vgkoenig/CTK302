let alpha = 0,
  beta = 0,
  gamma = 0; // gyroscope variablers
let xPosition = 0;
let yPosition = 0;
let x = 0,
  y = 0,
  z = 0;
let song1, song2, song3, song4;
var soundFile;
var amplitude;
var fft;
var img;
var particles = [];

//prob delete
// rectangle parameters
// var rectRotate = true;
// var rectMin = 15;
// var rectOffset = 20;
// var numRects = 10;
 var level ;

// :: Beat Detect Variables
// how many draw loop frames before the beatCutoff starts to decay
// so that another beat can be triggered.
// frameRate() is usually around 60 frames per second,
// so 20 fps = 3 beats per second, meaning if the song is over 180 BPM,
// we wont respond to every beat.
var beatHoldFrames = 30;

// what amplitude level can trigger a beat?
var beatThreshold = 0.11;

// When we have a beat, beatCutoff will be reset to 1.1*beatThreshold, and then decay
// Level must be greater than beatThreshold and beatCutoff before the next beat can trigger.
var beatCutoff = 0;
var beatDecayRate = 0.98; // how fast does beat cutoff decay?
var framesSinceLastBeat = 0; // once this equals beatHoldFrames, beatCutoff starts to decay.

function preload() {
  song1 = loadSound("assets/Heat.mp3");
  song2 = loadSound("assets/Speedy.mp3");
  song3 = loadSound("assets/sadstuff.mp3");
  song4 = loadSound("assets/Samplebeatcopy.mp3");
  img= loadImage("assets/background2.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noStroke();
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  

  amplitude = new p5.Amplitude();
  fft = new p5.FFT();
  img.filter(BLUR, 7);
 
}

function draw() {
  background(0);
  translate(width /2, height /2);
  
  fft.analyze()
  amp = fft.getEnergy(20, 200);
  
  image(img, 0, 0, width, height);
  
  // circle visualizer
  // var alpha = map(amp, 0, 175, 200, 100);
  // fill (0, alpha);
  // noStroke();
  // rect(0, 0, width, height);

  stroke(255);
  strokeWeight(3);
  noFill();
  
  var wave = fft.waveform() 
  
for (var t = -1; t<= 1; t += 2) {
    beginShape()
    for (var i = 0; i< 180; i+= 0.1) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1));

      var r = map(wave[index], -1, 1, 150, 350);
      
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x,y);
    }
    endShape();
  }
  
  var p = new Particle()
  particles.push(p)
  
  for (var i = particles.length -1; i >= 0; i--){
    if (!particles[i].edges()) {
    particles[i].update(amp > 200)
    particles[i].show()
    } else {
      particles.splice(i, 1);
    }
  }
  // figure out which way we are facing

  if (alpha > 0 && alpha < 90) {
    text("hi", width / 2, height / 2);

    if (!song1.isPlaying()) {
      song1.loop();
      print("starting song 1");
       amplitude.setInput(song1);
  amplitude.smooth(0.9);
    }
    if (song2.isPlaying()) {
      song2.pause();
    }
    if (song3.isPlaying()) {
      song3.pause();
    }
    if (song4.isPlaying()) {
      song4.pause();
    }
  }

  if (alpha > 90 && alpha < 180) {
    text("hello", width / 2, height / 2);

    if (!song2.isPlaying()) {
      song2.loop();
      print("starting song 2");
       amplitude.setInput(song2);
  amplitude.smooth(0.9);
    }
    if (song1.isPlaying()) {
      song1.pause();
    }
    if (song3.isPlaying()) {
      song3.pause();
    }
    if (song4.isPlaying()) {
      song4.pause();
    }
  }
  if (alpha > 180 && alpha < 270) {
    text("how are ya", width / 2, height / 2);

    if (!song3.isPlaying()) {
      song3.loop();
      print("starting song 3");
       amplitude.setInput(song3);
  amplitude.smooth(0.9);
    }
    if (song1.isPlaying()) {
      song1.pause();
    }
    if (song2.isPlaying()) {
      song2.pause();
    }
    if (song4.isPlaying()) {
      song4.pause();
    }
  }
  if (alpha > 270 && alpha < 360) {
    text("im okay", width / 2, height / 2);

    if (!song4.isPlaying()) {
      song4.loop();
      print("starting song 4");
       amplitude.setInput(song4);
  amplitude.smooth(0.9);
    }
    if (song1.isPlaying()) {
      song1.pause();
    }
    if (song3.isPlaying()) {
      song3.pause();
    }
    if (song2.isPlaying()) {
      song2.pause();
    }
  }
 
  
   level = amplitude.getLevel();
  detectBeat(level);

  // distort the rectangle based based on the amp
 // var distortDiam = map(level, 0, 1, 0, 1200);
  //var w = rectMin;
//  var h = rectMin;

  // distortion direction shifts each beat
 // if (rectRotate) {
  var rotation = PI/ 2;
 // } else {
  //  var rotation = PI/ 3;
 // }

  // rotate the drawing coordinates to rectCenter position
 // var rectCenter = createVector(width/3, height/2);

  //push();

    // draw the rectangles
   // for (var i = 0; i < numRects; i++) {
    //  var x = rectCenter.x + rectOffset * i;
     // var y = rectCenter.y + distortDiam/2;
      // rotate around the center of this rectangle
     // translate(x, y); 
      //rotate(rotation);
      //rect(0, 0, rectMin, rectMin + distortDiam);
  //  }
 // pop();
}


// Read in gyroscope data
window.addEventListener("deviceorientation", function (e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener("devicemotion", function (e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});


// function mouseClicked() {
//   if (song.isPlaying()) {
//     song.pause()
//     noLoop()
//   } else {
//     song.play()
//     loop()
//   }
// }

class Particle {
  constructor() {
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0, 0);
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001));
    
    this.w = random(3, 5);
  }
  update(cond){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    if (cond) {
    this.pos.add(this.vel);
    this.pos.add(this.vel);
    this.pos.add(this.vel);
    }
  }
  
  edges(){
    if (this.pos.x < -width /2 || this.pos.x > width / 2 || this.pos.y < -height / 2 || this.pos.y > height / 2) {
      return true
    } else {
      return false
    }
  }
  show(){
    noStroke();
    fill(225);
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}
function touchStarted() {
  getAudioContext().resume();
}


function detectBeat(level) {
  if (level  > beatCutoff && level > beatThreshold){
    // onBeat();
    beatCutoff = level *1.2;
    framesSinceLastBeat = 0;
  } else{
    if (framesSinceLastBeat <= beatHoldFrames){
      framesSinceLastBeat ++;
    }
    else{
      beatCutoff *= beatDecayRate;
      beatCutoff = Math.max(beatCutoff, beatThreshold);
    }
  }
}

//function onBeat() {
//   backgroundColor = color( random(0,255), random(0,255), random(0,255) );
//   rectRotate = !rectRotate;
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

