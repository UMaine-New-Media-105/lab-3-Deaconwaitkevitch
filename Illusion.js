function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);  

  ellipse(200, 50, 50);
  ellipse(200, 100, 100);
  ellipse(200, 200, 150);
  ellipse(200, 300, 200);
  
  Circles(-100,40)
}
function Circles(x,y){
translate(x,y)
ellipse(200, 50, 50);
  ellipse(200, 100, 100);
  ellipse(200, 200, 150);
  ellipse(200, 300, 200);
  if (mouseX > 300) {
    fill("blue");
  } else if (mouseX < 200 && mouseX < 100) {
    fill("orange");
  } else fill("darkred");

  if (mouseIsPressed) {
    fill("forestgreen");
  }
}
