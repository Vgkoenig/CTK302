let state = -1;

let s1, s2, s3;
function setup() {
  createCanvas(800, 800);
}
  function preload(){
    s1 = loadSound("assets/funky.mp3");
    s2 = loadSound("assets/photo.mp3");
    s3 = loadSound("assets/piano.mp3");
  }

function draw() {

  
  
  switch (state) {
    case-1:
    background(100);
    text("please click to start", 100, 100);
    break;

    case 0:
      text("0", 100, 100);
      background("rgb(107,14,14)");
      if (!s1.isPlaying()){
        s1.play();
      }
      break;

    case 1:
      text("1", 100, 100);
      background("rgb(192,163,192)");
      if (!s2.isPlaying()){
        s2.play();
      }
      break;

    case 2:
      text("2", 100, 100);
      background("rgb(235,149,44)");
            if (!s3.isPlaying()){
        s3.play();
      }
      break;

  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}