let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch(state){
    case 0:
      background("red");
      text("My friend is in a band called '1023MB'.\n I checked their sound", width / 2, height / 2); 
    break;

    case 1:
      background("blue");
      text("it was good,\n but they are't quite ready for a gig", width / 2, height / 2);
    break;

  }
}

function mouseReleased(){
  state++ ;
  if (state > 1) state = 0;
}