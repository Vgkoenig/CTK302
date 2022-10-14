let state = 0;
let timer = 0;
let img, img1, img2;

function preload() {
  img = loadImage('assets/jay.jpeg');
  img1 = loadImage('assets/chi.jpeg');
  img2 = loadImage('assets/alex.jpeg');

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background(" rgb(213,195,223)");
      image(img, 50, 50, 300, 300);
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background("rgb(236,245,236)");
      image(img1, 50, 50, 300, 300);
      timer++;
      if (timer > 7 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      background("rgb(225,239,243)");
      image(img2, 50, 50, 300, 300);
      timer++;
      if (timer > 9 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
}
