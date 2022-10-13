let state = 0;
let timer = 0;
let img, img1, img2;

function preload() {
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background(" rgb(213,195,223)");
      //images go here, text here
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background("rgb(236,245,236)");
      timer++;
      if (timer > 7 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      background("rgb(225,239,243)");
      timer++;
      if (timer > 9 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
}
