let rumble;

function preload() {
  rumble = loadSound("assets/rumble.mp3");

}

function setup() {
  createCanvas(500, 500);
  rumble.play();
}

function draw() {
  background("black");
  fill("white");
  text("the name of the song is rumble it sounds cool:)", 100, 100, 400, 400); 
}

function mouseReleased() {
    if (rumble.isPlaying()) {
      rumble.pause();
    } else {
      rumble.play();
    }
}

function touchStarted() {
  getAudioContext().resume();
}
