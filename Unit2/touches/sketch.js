let numberOfTouches ;
let img, img1, img2;

function preload() {
  img = loadImage('assets/ch1.jpeg');
  img1 = loadImage('assets/ch2.jpeg');
  img2 = loadImage('assets/ch3.jpeg');
  img3 = loadImage('assets/ch4.jpeg');
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("Charlie is exploring peacfully", 5, 22) ;
      image(img, 50, 50, 200, 250); 
      break ;
      
      case 1: 
       text("why would you disturb his adventures?", 5, 22) ; 
       image(img1, 50, 50, 200, 250); 
       break ;
      
      case 2:
      text("now he attacks", 5, 22) ; 
      image(img2, 50, 50, 200, 250); 
      break ;
      
      case 3:
     text("nvm he got distracted", 5, 22) ; 
     image(img3, 50, 50, 200, 250); 
      break ;
    
      
  }
  
}