let state = -1;

let s1, s2, s3;
function setup() {
  createCanvas(800, 800);
}
  function preload(){
    s1 = loadSound("assets/blkplanet.mp3");
    s2 = loadSound("assets/brokenfingers.mp3");
    s3 = loadSound("assets/hammer.mp3");
  }

function draw() {

  
  
  switch (state) {
    case-1:
    background(100);
    text("please click to start!", 100, 100);
    break;

    case 0:     
     background("rgb(107,14,14)");
      text("Black Planet by Sisters of Mercy", 100, 100);
      if (!s1.isPlaying()){
        s1.play();
      }
      break;

    case 1:
      background("rgb(192,163,192)");
      text("Broken Fingers by Vision Video", 100, 100);
      if (!s2.isPlaying()){
        s2.play();
      }
      break;

    case 2:
      background("rgb(235,149,44)");
      text("square Hammer by Ghost", 100, 100);
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