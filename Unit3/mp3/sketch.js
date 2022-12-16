let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let img1, img2, img3, img4;


function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
  imageMode(CENTER);

  font1 = loadFont('assets/Minecraft.ttf');

  img1 = loadImage("assets/cave1.jpeg");
  img2 = loadImage("assets/cave2.jpg");
  img3 = loadImage("assets/bat.png");
  img4 = loadImage("assets/gem.png");
  img5 = loadImage("assets/treasure.png");


  // Spawn objects
  for (let i = 7; i < 20; i++) {
    cars.push(new Car());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  switch (state) {
  
    case 0: // menu
      image(img1, width /2 , height /2, 800, 600);
      textFont(font1, 30)
      fill("white");
      textAlign(CENTER);
      text("Oh no, you woke the bats!\nScare them off and collect all gems.", 400, 300);
      textFont(font1, 20)
      text("Click to Start", 300, 380);

    
      break;

    case 1:
      game();
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: // win
      background(100);
      fill("white");
      image(img2, width /2, height/ 2, 800, 700);
      image(img5, width /2, height - 100, 200, 200);

      textFont(font1, 30)
      textAlign(CENTER);
      text("You Won and Found the Treasure!", width / 2, 300);
      break;

    case 3: // lose
      background(100);
      image(img2, width /2, height/ 2, 800, 700);
      fill("white");
      textFont(font1, 30)
      text("You Lost!\nClick to Restart", width / 2, 300);
      break;
  }
}

function resetTheGame() {
  cars = [];

  for (let i = 0; i < 4; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function mouseReleased() {
  switch (state) {
    case 0: // menu screen
      state = 1;
      break;

    case 2: // win screen
      resetTheGame();
      state = 0;
      break;

    case 3: // lose screen
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  background("white");
        image(img2, width /2, height/ 2, 800, 700);

      

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 30) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  // add a "frog"
  fill("black");
  rect(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  
  if (frogPos.x > width) frogPos.x = width ;
  
  
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(200, 400), 100); // initialize your attributes here
    this.velocity = createVector(0, random(1, 5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128);

    if (random(2)> 1){
      this.img = img3;
    } else {
      this.img = img4;
    }

  }
  // methods

  display() {
    // this can be text, images, or shapes
    // fill(this.r, this.g, this.b, this.o);
    // rect(this.pos.x, this.pos.y, this.size, 25);

    image(this.img, this.pos.x, this.pos.y, 50, 50) ;
  }

  move() {
    this.pos.add(this.velocity);
    
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
