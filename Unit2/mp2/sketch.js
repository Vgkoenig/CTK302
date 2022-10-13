let state = 0;
let img, img1, img2, img3, img4, img5;
let s1;
let myFont;
let timer = 0;


function preload() {
  img = loadImage('assets/Entrance.jpg');
  img1 = loadImage('assets/rock.PNG');
  img2 = loadImage('assets/breakrock.PNG');
  img3 = loadImage('assets/norock.PNG');
  img4 = loadImage('assets/treasure.png');
  img5 = loadImage('assets/end.png');
  s1 = loadSound('assets/cavemusic.mp3');
  myFont = loadFont('assets/Minecraft.ttf');

}

   
function setup() {
  createCanvas(1540, 500);
  if (!s1.isPlaying()){
  s1.play();
  }
  //  music made by walkabout on youtube
}

function draw() {
  background(220);
  


  switch (state) {
    case 0:
      background("rgba(13,7,37,255)")
      fill("rgb(204, 216, 240)");
      textFont(myFont)
      textSize(20);
      text("Cave Explorers!\n   Click to Start", 100, 100);
      image(img, 300, 50, 1000, 400);

      break;
      
      case 1:
      background("rgba(13,7,37,255)")
      fill("rgb(204, 216, 240)");
      text("                 oh no!\nRocks have blocked the path!\n   *Click to break the rocks*", 10, 100);
      image(img1, 300, 50, 1000, 400);

      break;
      
      case 2:
      background("rgba(13,7,37,255)");
      fill("rgb(204, 216, 240)");
      text("Almost there!", 100, 100);
      image(img2, 300, 50, 1000, 400);

      break; 

      case 3:
      background("rgba(13,7,37,255)");
      fill("rgb(204, 216, 240)");
      text("Lets finish exploring...", 50, 100);
      image(img3, 300, 50, 1000, 400);

      break; 

      case 4:
      background("rgba(13,7,37,255)");
      fill("rgb(204, 216, 240)");
      text("You've found\nThe treasure!", 100, 100);
      image(img4, 300, 50, 1000, 400);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 5;
      }

      break; 

      case 5:
      background("rgba(13,7,37,255)");
      image(img5, 300, 50, 1000, 400);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 0;
      }
      break; 
  }
}
  
 function mouseReleased(){
   state++ ;
   if (state > 5) {
     state = 0;
   }
 }