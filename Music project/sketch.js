let mySound;
function preload(){
  mySound = loadSound("assets/song.mp3");
}


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  mySound.play();
}

function draw() {
  background(220);
}
function mousePressed(){
  if(mySound.isPlaying() == false){
     mySound.play()
  } ekse(
    mySound.stop()
  )
}
