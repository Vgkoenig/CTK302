let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch(state){
    case 0:
      background("red");
      text("why did \nthe chx", width / 2, height / 2, 400, 400); 
    break;

    case 1:
      background("blue")
      text("becasue", width / 2, height / 2);
    break;

  }
}

function mouseReleased(){
  state++ ;
  if (state > 1) state = 0;
}