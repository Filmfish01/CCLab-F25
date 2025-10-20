function setup() {
  let canvas = createCanvas(800, 500);
canvas.parent("p5-canvas-container");
  fish = PI/2
  t_p = 0
  
  Cell_wall_x = 200
  Cell_wall_y = 200
  Cell_wall_Vx = 0
  Cell_wall_Vy = 0
  Cell_wall_PA = 0
  a_CW = 0
  
  start_x = 0 
  start_y = 0
  end_x = 0 
  end_y = 10
  radius = 10
  segments= 40
  randomness = 0.1
  
  
  n_mass = 20
  n_x = 200
  n_y = 200
  n_vel_x = 0
  n_vel_y = 0
  n_radius = 25

  p_x = 160
  p_y = 160
  p_mass = 1
  p_size = 10
  p_vel_x = 0
  p_vel_y = 0
  
  collision = 0
  
  //Background set up
  t = PI/4
  rows = 16
  colums = 11
  get_image = 0
  //lrud
  start_c = 1111
  standard_c = 1010
  right_c = 1110
  left_c = 1011
  code = 1010
  base_SW = 2
  x = 25
  y = 25
  w = 50 //even number
  h = 50 //even number
  edgeSW = 3
  edge_r = 5
  edge_RO = 0
  conctrSW = 2
  conct_r = 5
  conct_RO = 0
  mid_r = 8
  mid_RO = 0
  mid_SW = 4
  
}
function tile(x, y, w, h, state, coner) {
  stroke(200)
  fill(230)
  //base
  quad(x-w/2, y-h/2, x-w/2 + w , y-h/2,x-w/2 + w  , y+h/2,x-w/2, y+h/2);
  stroke(0)
  strokeWeight(edgeSW)
  
  if(round(coner/1000) % 2 == 1){
  quad(x - w/2 - edge_r ,  y - h/2 - edge_r, x - w/2 + edge_r,  y - h/2 - edge_r, x - w/2 + edge_r,  y - h/2 + edge_r, x - w/2 - edge_r,  y - h/2 + edge_r)  
  }     
  if(round(coner/100) % 2 == 1){
  quad(x + w/2 - edge_r ,  y - h/2 - edge_r , x + w/2 + edge_r ,  y - h/2 - edge_r , x + w/2 + edge_r ,  y - h/2 + edge_r , x + w/2 - edge_r ,  y - h/2 + edge_r );
  }

  //bottom
  if(round(coner/10) % 2 == 1){
  quad(x - w/2 - edge_r ,  y + h/2 - edge_r , x - w/2 + edge_r ,  y + h/2 - edge_r ,x - w/2 + edge_r ,  y + h/2 + edge_r , x - w/2 - edge_r ,  y + h/2 + edge_r );
  }
  if(round(coner) % 2 == 1){
  quad(x + w/2 - edge_r ,  y + h/2 - edge_r , x + w/2 + edge_r ,  y + h/2 - edge_r , x + w/2 + edge_r ,  y + h/2 + edge_r , x + w/2 - edge_r ,  y + h/2 + edge_r );
  }
  //connectors
  if(round(state/1000) % 2 == 1){
  quad(x - w/2 + conct_r * sin(conct_RO + 7*t) , y - conct_r * cos(conct_RO+ 7*t) , x - w/2 + conct_r * sin(conct_RO+ t) , y - conct_r * cos(conct_RO+ 1*t) , x - w/2 + conct_r * sin(conct_RO+ 3*t) , y - conct_r * cos(conct_RO+ 3*t) , x - w/2 + conct_r * sin(conct_RO+ 5*t) , y - conct_r * cos(conct_RO+ 5*t) );
}
  if(round(state/100) % 2 == 1){
  quad(x + w/2 + conct_r * sin(conct_RO + 7*t) , y - conct_r * cos(conct_RO+ 7*t) , x + w/2 + conct_r * sin(conct_RO+ t) , y - conct_r * cos(conct_RO+ 1*t) , x + w/2 + conct_r * sin(conct_RO+ 3*t) , y - conct_r * cos(conct_RO+ 3*t) , x + w/2 + conct_r * sin(conct_RO+ 5*t) , y - conct_r * cos(conct_RO+ 5*t) );
}  
  if(round(state/10) % 2 == 1){
  quad(x + conct_r * sin(conct_RO + 7*t) , y - conct_r * cos(conct_RO+ 7*t) - h/2 , x + conct_r * sin(conct_RO+ t) , y - conct_r * cos(conct_RO+ 1*t) - h/2 , x + conct_r * sin(conct_RO+ 3*t) , y - conct_r * cos(conct_RO+ 3*t) - h/2 ,x + conct_r * sin(conct_RO+ 5*t) , y - conct_r * cos(conct_RO+ 5*t) - h/2 );
  }
  if(state % 2 == 1){
  quad(x + conct_r * sin(conct_RO + 7*t) , y - conct_r * cos(conct_RO+ 7*t) + h/2 ,x + conct_r * sin(conct_RO+ t) , 
y - conct_r * cos(conct_RO+ 1*t) + h/2 ,x + conct_r * sin(conct_RO+ 3*t) , y - conct_r * cos(conct_RO+ 3*t) + h/2 ,x + conct_r * sin(conct_RO+ 5*t) , y - conct_r * cos(conct_RO+ 5*t) + h/2 );
  }
  //middle
  strokeWeight(mid_SW);

  quad(x + mid_r * sin(mid_RO + 7*t) , y - mid_r * cos(mid_RO + 7*t) ,x + mid_r * sin(mid_RO + t) , y - mid_r * cos(mid_RO + 1*t) ,x + mid_r * sin(mid_RO + 3*t) , y - mid_r * cos(mid_RO + 3*t) ,x + mid_r * sin(mid_RO + 5*t) , y - mid_r * cos(mid_RO + 5*t) );
        
  // get the line
  strokeWeight(base_SW);
  noFill();
  quad(x - w/2 ,  y - h/2 ,x - w/2 + w ,  y - h/2 , x - w/2 + w ,  y + h/2 , x - w/2 ,      y + h/2 );


  
}

function con_tile(x, y, w, h, f){
  stroke(0)
  strokeWeight(edgeSW)
  
  if (f == 1){
  fill(230)
  }
  if (f == 0){
    noFill()
  }
  quad(x - w/2 - edge_r ,  y - h/2 - edge_r, x - w/2 + edge_r,  y - h/2 - edge_r, x - w/2 + edge_r,  y - h/2 + edge_r, x - w/2 - edge_r,  y - h/2 + edge_r)  
    
  quad(x + w/2 - edge_r ,  y - h/2 - edge_r , x + w/2 + edge_r ,  y - h/2 - edge_r , x + w/2 + edge_r ,  y - h/2 + edge_r , x + w/2 - edge_r ,  y - h/2 + edge_r );


  //bottom
  quad(x - w/2 - edge_r ,  y + h/2 - edge_r , x - w/2 + edge_r ,  y + h/2 - edge_r ,x - w/2 + edge_r ,  y + h/2 + edge_r , x - w/2 - edge_r ,  y + h/2 + edge_r );
  quad(x + w/2 - edge_r ,  y + h/2 - edge_r , x + w/2 + edge_r ,  y + h/2 - edge_r , x + w/2 + edge_r ,  y + h/2 + edge_r , x + w/2 - edge_r ,  y + h/2 + edge_r );
  
  noFill()
}
function Cell_wall(Cell_wall_x, Cell_wall_y){
  a_CW = 0
  Cell_wall_x = Cell_wall_x - 5
  Cell_wall_y = Cell_wall_y - 68
  start_x = Cell_wall_x
  start_y = Cell_wall_y
  end_x = Cell_wall_x + radius*cos( noise(frameCount + a_CW) * randomness) 
  end_y = Cell_wall_y + radius*sin( noise(frameCount + a_CW) * randomness)
  stroke(0)
  strokeWeight(10)
  line(start_x, start_y, end_x, end_y)
  a_CW = 1
  while(a_CW < segments){
    start_x = end_x
    start_y = end_y 
    end_x += radius*cos(a_CW* 4 * fish/segments + noise(frameCount + a_CW) * randomness) 
    end_y += radius*sin(a_CW* 4 * fish/segments + noise(frameCount + a_CW) * randomness)
    if( a_CW + 1 == segments){
      end_x = Cell_wall_x
      end_y = Cell_wall_y
    }
    line(start_x, start_y, end_x, end_y)
    a_CW += 1

  }
 
}
function drawNcreature(Cell_wall_x, Cell_wall_y, n_x, n_y, n_radius ) {
  //cell wall
  
  push()
  
  fill(0, 0, 0, 100)
  
  ellipse(Cell_wall_x, Cell_wall_y, 130, 130)
  if(mouseIsPressed && t_p == 0){
    fill(255)
    ellipse(p_x, p_y, 10,10)
  }
  if(t_p == 1){
    fill(200)
    ellipse(p_x, p_y, p_size,p_size)
  }
  
  Cell_wall(Cell_wall_x, Cell_wall_y)

  /*noFill()
  strokeWeight(20)
  stroke(150, 200, 150)
  ellipse(Cell_wall_x, Cell_wall_y, 130, 130)
  push()
  */
  rectMode(CENTER);
  translate(Cell_wall_x, Cell_wall_y)
  rotate(Cell_wall_PA)
  fill(200, 200, 200)
  noStroke()
  rect(0, -64, 16, 30)
  pop()
  //nMass
  noStroke()
  fill(255)
  ellipse(n_x, n_y,2 * n_radius, 2 *n_radius)
  
}
function Cal_mommentum_fv1(m1, m2, v1, v2){
  final_speed_1 = ((m1-m2)/(m1+m2))*v1 + ((2* m2)/(m1+m2)) * v2
  
  return final_speed_1
}
function Cal_mommentum_fv2(m1, m2, v1, v2){
  final_speed_2 = ((2*m1)/(m1+m2))* v1 + ((m2-m1)/(m1+m2)) * v2
  
  return final_speed_2
}

function draw() {
  
  //Background
  background(220);
  fill(255)
  
  a = 0
  b = 0
  ab_sum = 0
  conct_RO = 0
  while( a + b <= ab_sum && ab_sum <= rows + colums){
    b = 0
    conct_RO =  3.14 * noise(a + b + frameCount * 0.02) 
    mid_RO =  3.14 * noise(a + b + frameCount * 0.01) 
    while(b < colums){
      a = ab_sum - b
      stroke(200)
      /*
      start_c = 1111
  standard_c = 1010
  right_c = 1110
  left_c
      */
      
      //find which tile to use
      if( a == rows -1 && b == colums - 1){
        code = start_c
      }else if( a == rows - 1 && b == 0){
        code = right_c
      }else if(b == colums -1 && a == 0){
        code = left_c
      }else{
        code = standard_c
      }
      
        
      
      
      
      if( a < rows && a >= 0){
        tile(x + w * a, y + h * b,w, h, code, 0000 )
      }
      
      b += 1
    }
    ab_sum += 1
  }
  
  a = 0
  b = 0
  ab_sum = 0
  conct_RO = 0
  while( a + b <= ab_sum && ab_sum <= rows + colums){
    b = 0
    while(b < colums){
      a = ab_sum - b
      if( a < rows && a >= 0){
        con_tile(x + w * a, y + h * b,w, h, 1)
      }
      
      b += 1
    }
    ab_sum += 1
  }
  
  
  //Particle

  noStroke()
  fill(250)
  if(mouseIsPressed && t_p == 0){
    if(key == 'z'){
      p_m = 4
      p_size = 14

    }else{
      p_m = 1
      p_size = 10
    }
    p_x = n_x + 50 * cos(Cell_wall_PA - fish)
    p_y = n_y + 50 * sin(Cell_wall_PA - fish)
    p_vel_x = -cos(Cell_wall_PA - fish)
    p_vel_y = -sin(Cell_wall_PA - fish)

    t_p = 1
  }

  if(abs(p_x-Cell_wall_x) > 50 || abs(p_y-Cell_wall_y) > 50 ){
         t_p = 0
  }
  //cell wall
  drawNcreature(Cell_wall_x, Cell_wall_y, n_x, n_y, n_radius )
  
  
  
  //calculate pointing angel 
  Mouse_dir = 0
  if(n_x > mouseX){
  Mouse_dir = atan( (mouseY-n_y)/(mouseX-n_x) ) - fish
  }else{
    Mouse_dir = atan( (mouseY-n_y)/(mouseX-n_x) ) + fish
  }
  if( Mouse_dir >Cell_wall_PA || 1==1){
    Cell_wall_PA = Mouse_dir
  }else{
    Cell_wall_PA = Mouse_dir
  }
  //calculate physics for next step
  if(p_x > n_x - n_radius && p_x < n_x + n_radius){
    if(p_y > n_y - n_radius && p_y < n_y + n_radius){
      if(collision == 0){
        collision = 1
      }
      
    }
  }
  
  if(collision == 1){
    n_f_xV = Cal_mommentum_fv1(n_mass, p_mass, n_vel_x, p_vel_x)
    p_f_xV = Cal_mommentum_fv2(n_mass, p_mass, n_vel_x, p_vel_x)
    
    n_vel_x = -n_f_xV
    p_vel_x = p_f_xV
    
    n_f_yV = Cal_mommentum_fv1(n_mass, p_mass, n_vel_y, p_vel_y)
    
    p_f_yV = Cal_mommentum_fv2(n_mass, p_mass, n_vel_y, p_vel_y)
    n_vel_y = -n_f_yV
    p_vel_y = p_f_yV

    collision = 0.2

  }
  
  if(collision > 0){
    collision += -0.1
  }
  
  //cell wall spring
  if(abs(n_x - Cell_wall_x) > 0){
    Cell_wall_Vx += (n_x - Cell_wall_x) * 0.1
  }
  if(abs(n_y - Cell_wall_y) > 2){
    Cell_wall_Vy += (n_y - Cell_wall_y) * 0.1
  }
  if(Cell_wall_Vx - 0.3 > 0 && Cell_wall_Vx > 0){
    Cell_wall_Vx = Cell_wall_Vx - 0.1
  }
  if(Cell_wall_Vx + 0.3 < 0 && Cell_wall_Vx < 0){
     Cell_wall_Vx = Cell_wall_Vx + 0.1
  }
  if(Cell_wall_Vy - 0.3 > 0 && Cell_wall_Vy > 0){
     Cell_wall_Vy = Cell_wall_Vy - 0.1
  }
  if(Cell_wall_Vy + 0.3 < 0 && Cell_wall_Vy < 0){
     Cell_wall_Vy = Cell_wall_Vy + 0.1
  }
  
  
  
  n_x += n_vel_x
  p_x += p_vel_x 
  n_y += n_vel_y 
  p_y += p_vel_y
  
  Cell_wall_x +=  Cell_wall_Vx
  Cell_wall_y +=  Cell_wall_Vy
  
  
  // force = mass * accelleration 
  // force is perportional to displacement 
  //
  /*
  final_speed_1 = ((m1-m2)/(m1+m2))*rect_1_speed + ((2* m2)/(m1+m2)) * rect_2_speed
final_speed_2 = ((2*m1)/(m1+m2))* rect_1_speed + ((m2-m1)/(m1+m2)) * rect_2_speed
  */
  
}
