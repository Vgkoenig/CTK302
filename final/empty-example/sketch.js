let alpha = 0,
  beta = 0,
  gamma = 0; // gyroscope variablers
let bunnyImage;
let xPosition = 0;
let yPosition = 0;
let x = 0,
  y = 0,
  z = 0;
let song1, song2, song3, song4;

function preload() {
  song1 = loadSound("assets/blkplanet.mp3");
  song2 = loadSound("assets/brokenfingers.mp3");
  song3 = loadSound("assets/hammer.mp3");
  song4 = loadSound("assets/blkplanet.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //  bunnyImage = loadImage("assets/bunny.jpg");
  imageMode(CENTER);
  rectMode(CENTER);
  //song1.play();
  //song2.play();
  //song3.play();
  //song4.play();
}

function draw() {
  background("#c6f5ff"); // light blue

  //      if (song1.isPlaying()) {
  //       song1.pause();
  //     } else {
  //       song1.play();
  //     }

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // rotate the bunny depending on the alpha intake

  //  image(bunnyImage, 0, 0, 500, 500);
  // rect(0, 0, 100, 100) ;
  pop();

  // Text commands that display debugging data
  textAlign(LEFT);
  textSize(20);
  fill("black");
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);

  // Text that makes CTK type in the background
  fill("white");
  noStroke();
  textSize(300);
  textAlign(CENTER);
  //text("ctk", width / 2, height / 2);

  // figure out which way we are facing

  if (alpha > 0 && alpha < 90) {
    text("hi", width / 2, height / 2);

    if (!song1.isPlaying()) {
      song1.play();
      print("starting song 1");
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
      song2.play();
      print("starting song 2");
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
      song3.play();
      print("starting song 3");
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
  }
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

function touchStarted() {
  getAudioContext().resume();
}
