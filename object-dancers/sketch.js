/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new EyeDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only
  
  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class EyeDancer {
  constructor(startX, startY) {
    this.rect_x = startX
    this.rect_y = startY
    this.rect_start_y = startY
    this.rect_w = 56 * random(0.3, 1.8)
    this.rect_h = 56 * random(0.3, 1.8)
    this.rect_y_s = 0
    this.rect_x_s = 0
    this.rect_x_scale = 1.0
    this.rect_y_scale = 1.0
    this.rect_stage = 0
    this.eye_x = 0
    this.eye_y = 0
    
  }
  update() {
    //stage 0 rect is preparing to jump x scale is increasing 
    if(this.rect_stage == 0 && this.rect_x_scale < 1.2){
      this.rect_x_scale += 0.03
      this.rect_y_scale = 2 - this.rect_x_scale
    }
    if(this.rect_stage == 0 && this.rect_x_scale >= 1.2){
      this.rect_stage = 1
    }
    if(this.rect_stage == 1 ){
      this.rect_stage = 2
      this.rect_y_scale = 0.1 + this.rect_x_scale
      this.rect_x_scale = 2 - this.rect_y_scale
      this.rect_y_s = -1/2 * (this.rect_h * this.rect_y_scale - this.rect_h)

    }else if(this.rect_stage == 2){
      //stage 1 rect is jumping x is converted to y and calculating speed
      this.rect_y_s += 1
      if(this.rect_y + this.rect_h * this.rect_y_scale * 1/2 +this.rect_y_s  <=  this.rect_start_y + this.rect_h * this.rect_y_scale * 1/2 ){
        this.rect_y += this.rect_y_s
      }else{
        this.rect_y =  this.rect_start_y 
        this.rect_stage = 3
      }
      if(this.rect_y_s < 0){
        this.eye_y = 5
      }else{
        this.eye_y = -5
      }
    }
    if(this.rect_stage == 3){
      if(this.rect_y_scale > 1){
        this.rect_y_scale += -0.001
        this.rect_y_scale += - 0.6 * pow((1-this.rect_y_scale),2)
      }if(this.rect_y_scale < 1){
        this.rect_y_scale += 0.001
        this.rect_y_scale += 0.5 * pow((1-rect_y_scale),2)
      }
      this.rect_x_scale = 2 - this.rect_y_scale 

      if(this.rect_y_scale <= 1.01 && this.rect_y_scale >= 0.99){
        this.rect_stage = 0
      }
      this.eye_y = 0
    }
    }
  m_rect(x,y, w, h, s_w, s_h){
    rectMode(CENTER)
    noStroke()
    y += -1/2 * (h * s_h - h)
    rect(x, y, w * s_w, h * s_h)
  }
  display() {
    fill(255)
    this.m_rect(this.rect_x, this.rect_y, this.rect_w, this.rect_h, this.rect_x_scale, this.rect_y_scale)
    fill(0)
  

    this.eye_x = noise(frameCount * 0.05) * 1 + sin(frameCount * 0.05) * 1
  
    this.m_rect(this.rect_x + this.eye_x , this.rect_y , 20, 20,this.rect_x_scale, this.rect_y_scale )
  }
}

class EyeDancer_not_working {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.rect_start_y = startY
    this.rect_w = 56 //* random(0.3, 1.8)
    this.rect_h = 56 //* random(0.3, 1.8)
    this.rect_y_s = 0
    this.rect_x_s = 0
    this.rect_x_scale = 1.0
    this.rect_y_scale = 1.0
    this.rect_stage = 0
    this.eye_x = 0
    this.eye_y = 0
    rect(200, 200,50,50)
  }
  update() {
    //stage 0 rect is preparing to jump x scale is increasing 
    if(this.rect_stage == 0 && this.rect_x_scale < 1.2){
      this.rect_x_scale += 0.03
      this.rect_y_scale = 2 - this.rect_x_scale
    }
    if(this.rect_stage == 0 && this.rect_x_scale >= 1.2){
      this.rect_stage = 1
    }
    if(this.rect_stage == 1 ){
      this.rect_stage = 2
      this.rect_y_scale = 0.1 + this.rect_x_scale
      this.rect_x_scale = 2 - this.rect_y_scale
      this.rect_y_s = -1/2 * (this.rect_h * this.rect_y_scale - this.rect_h)

    }else if(this.rect_stage == 2){
      //stage 1 rect is jumping x is converted to y and calculating speed
      this.rect_y_s += 1
      if(this.rect_y + this.rect_h * this.rect_y_scale * 1/2 +this.rect_y_s  <=  this.rect_start_y + this.rect_h * this.rect_y_scale * 1/2 ){
        this.rect_y += this.rect_y_s
      }else{
        this.rect_y =  this.rect_start_y 
        this.rect_stage = 3
      }
      if(this.rect_y_s < 0){
        this.eye_y = 5
      }else{
        this.eye_y = -5
      }
    }
    if(this.rect_stage == 3){
      if(this.rect_y_scale > 1){
        this.rect_y_scale += -0.001
        this.rect_y_scale += - 0.6 * pow((1-this.rect_y_scale),2)
      }if(this.rect_y_scale < 1){
        this.rect_y_scale += 0.001
        this.rect_y_scale += 0.5 * pow((1-rect_y_scale),2)
      }
      this.rect_x_scale = 2 - this.rect_y_scale 

      if(this.rect_y_scale <= 1.01 && this.rect_y_scale >= 0.99){
        this.rect_stage = 0
      }
      this.eye_y = 0
    }
  }
  m_rect(x,y, w, h, s_w, s_h){
    rectMode(CENTER)
    noStroke()
    y += -1/2 * (h * s_h - h)
    rect(x, y, w * s_w, h * s_h)
    rect(200, 200,50,50)
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    fill(255)
    this.m_rect(this.rect_x, this.rect_y, this.rect_w, this.rect_h, this.rect_x_scale, this.rect_y_scale)
    fill(0)
    
    this.eye_x = noise(frameCount * 0.05) * 1 + sin(frameCount * 0.05) * 1
  
    this.m_rect(this.rect_x + this.eye_x , this.rect_y , 20, 20,this.rect_x_scale, this.rect_y_scale )

    

    rect(200, 200,50,50)





    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/