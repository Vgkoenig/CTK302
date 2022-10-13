let mic;
let vol = 0;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background("rgb(39, 48, 92)");

  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1
  approachingVol += (vol - approachingVol) * ease;

  // text on the screen for debugging
  textSize(18);
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(3),
    10,
    60
  );

  // this moves the box
  //  x = vol*200 ;
  x = map(0, vol, 1, 0, width);
  fill("rgb(206, 212, 245)")
  rect(x, 200, 50, 50);
  
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
