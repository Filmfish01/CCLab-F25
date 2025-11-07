// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 30; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 100; // Decide the maximum number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  mouse_path = [200, 200]
  mouse_cool_down = 10
  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(50);
  if(mouseIsPressed && mouse_cool_down <= 0){
    mouse_path[0] = [mouseX]
    mouse_path[1] = [mouseY]
    mouse_cool_down = 10
  }else{
    if (mouse_cool_down > 0){
      mouse_cool_down += -1
    }
  }
  // consider generating particles in draw(), using Dynamic Array

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }

  // limit the number of particles
  if (particles.length > MAX_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first (oldest) particle
  }
  ellipse(200, 200, 50,50)
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.p_x = startX;
    this.p_y = startY;
    this.p_Sx = 0
    this.p_Sy = 0
    this.p_range = 3
    this.p_f = 0.1
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    if (this.p_range<dist(this.p_x, this.p_y, mouse_path[0],mouse_path[1])){
    if( this.p_x > mouse_path[0]){
      
      this.p_Sx += -pow((this.p_x - mouse_path[0])/400, 2) 

    }else{

      this.p_Sx +=   pow((this.p_x - mouse_path[0])/400, 2) 

    }
    if( this.p_y > mouse_path[1]){
      
      this.p_Sy +=   -pow((this.p_y - mouse_path[1])/400, 2) 

    }else{

      this.p_Sy +=   pow((this.p_y - mouse_path[1])/400, 2) 

    }
  }
  if ( this.p_x + this.p_Sx < width && this.p_x + this.p_Sx > 0){
    this.p_x += this.p_Sx
    if(abs(this.p_Sx) > this.p_f){
      if(this.p_Sx >  0){
        this.p_Sx += -0.01
      }
      if(this.p_Sx < 0){
        this.p_Sx += 0.01
      }
    }
  }else{
    this.p_Sx = 0
    
  }
  if ( this.p_y + this.p_Sy < height && this.p_y + this.p_Sy > 0){
    this.p_y += this.p_Sy 
    
    if(abs(this.p_Sy) > this.p_f){
      if(this.p_Sy >  0){
        this.p_Sy += -0.01
      }
      if(this.p_Sy < 0){
        this.p_Sy += 0.01
      }
    }
  }else{
    this.p_Sy = 0
  }
  }
  display() {
    // particle's appearance
    noStroke()
    fill(110,110, noise(this.p_x * 0.01 + frameCount * 0.01 ) * 255)
    ellipse(this.p_x,this.p_y, 20,20)


  }
}
