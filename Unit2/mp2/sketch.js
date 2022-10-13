let state = 0;
let img;
//let s1;

function preload() {
  img = loadImage('assets/Entrance.jpg');
  img1 = loadImage('assets/rock.png');
  img2 = loadImage('assets/breakrock.png');
  img3 = loadImage('assets/norock.PNG');
  img4 = loadImage('assets/treasure.png');
 // s1 = loadSound("assets/cavemusic.mp3");

}

   // Top-left corner of the img is at (10, 10)
  // Width and height are 50×50
  // image(img, 10, 10, 50, 50);

function setup() {
  createCanvas(1540, 500);
  //if (!s1.isPlaying()){
    //s1.play();
}

function draw() {
  background(220);
  
  }

  switch (state) {
    case 0:
      background("rgba(13,7,37,255)")
      fill("rgb(204, 216, 240)");
      text("in state 0", 100, 100);
      image(img, 300, 50, 1000, 400);

      break;
      
      case 1:
      background("rgba(13,7,37,255)")
      fill("rgb(204, 216, 240)");
      text("in state 1", 100, 100);
      image(img1, 300, 50, 1000, 400);

      break;
      
      case 2:
      background("rgba(13,7,37,255)");
      fill("rgb(204, 216, 240)");
      text("in state 2", 100, 100);
      image(img2, 300, 50, 1000, 400);

      break; 

      case 3:
      background("rgba(13,7,37,255)");
      fill("rgb(204, 216, 240)");
      text("in state 3", 100, 100);
      image(img3, 300, 50, 1000, 400);

      break; 

      case 4:
      background("rgba(13,7,37,255)");
      fill("rgb(204, 216, 240)");
      text("in state 4", 100, 100);
      image(img4, 300, 50, 1000, 400);

      break; 
  }
}
  
 function mouseReleased(){
   state++ ;
   if (state > 4) {
     state = 0;
   }
 }