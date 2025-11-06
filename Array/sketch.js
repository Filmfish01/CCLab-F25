let x,y,s;
function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent("p5-canvas-container");
  x = width/2;
  y = height/2;
  s = 100;
  speed_x = 5
}
function drawCloud(x, y, s){
  fill(255);
  push();
  noStroke();
  translate(x, y);
  //main circle
  circle(0, 0, s);
  //add circles around
  for(let angle=0; angle<2*PI; angle += PI/5){
    push();
    rotate(angle);
    let s2 = map(noise(angle), 0, 1, s* 0.1, s)
    circle(s * 0.5, 0, s2);
    pop();
  }
  pop();
}
function move(){
  if (x > width){
    speed_x = -5
  }
  if (x < 0){
    speed_x = 5
  }
  y = map(noise(frameCount * 0.01), 0, 1, 175, 225)
  x += speed_x
  
}
function draw() {
  background(220);
  drawCloud(x,y,s)
  move()
}
