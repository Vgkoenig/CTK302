let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch(state){
    case 0:
      background("red");
      text("i ran out of jokes", width / 2, height / 2); 
    break;

    case 1:
      background("blue");
      text(":)", width / 2, height / 2);
    break;

  }
  rect(100, 100, 100, 100)
}

function mouseReleased(){

if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200){
    state++ ;
    if (state > 1) state = 0;
  }
}