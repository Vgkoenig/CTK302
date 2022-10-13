let state = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  switch (state) {
    case 0:
      background("rgb(107,14,14)")
      text("in state 0", 100, 100);
      break;
      
      case 1:
      background("rgb(192,163,192)")
      text("in state 1", 100, 100);
      break;
      
      case 2:
      background("rgb(235,149,44)")
      text("in state 2", 100, 100);
      break; 
  }
}
  
 function mouseReleased(){
   state++ ;
   if (state > 2) {
     state = 0;
   }
 }