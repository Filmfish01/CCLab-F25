function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  b1 = new button(200, 200, 50, 50)
  list_of_strokes = [[[0,1],[100, 100]]]
  strokes = []
}
class button{
  constructor(x, y, w, h, label = "button"){
    self.x = x
    self.y = y
    self.w = w
    self.h = h
    
    self.label = label
    
    self.t = 0
    self.clicked_val = false

  }
  display(){
    if( self.clicked_val ){
      fill(200)
    }else{
      fill(255)
    }
    rect(self.x, self.y, self.w, self.h)
    fill(0)
    text(self.label, self.x + 5, self.y + self.h /2 )
  }
  is_clicked(){
    if(self.t == 0 && mouseIsPressed){
      if(mouseX >= self.x && mouseX <= self.x + self.w){
        if(mouseY >= self.y && mouseY <= self.y + self.h){
          self.clicked_val = true
          self.t = 10
        }
      }
    }
    if(self.t > 0){
      self.t += -1
    }
    if(self.t == 0){
      self.clicked_val = false
    }
  }
}

class dialogue_node{
  constructor(dialogue ,list_of_dialogue, parent){
    self.dialogue = dialogue
    self.list_of_dialogue = list_of_dialogue
    self.parent = parent
  }
  get_child_node(index){
    return self.list_of_dialogue[index]
  }
  get_dialogue(){
    return self.dialogue
  }
}


function draw() {
  background(220);
  b1.is_clicked()
  b1.display()
  
  
  if( mouseIsPressed){
    print(list_of_strokes)
    a = 0
    stroke(0)
    while (a < strokes.length - 1){
      line(strokes[a][0],strokes[a][1], strokes[a+1][0], strokes[a+1][1] )
      a += 1
    }
    strokes.push([mouseX, mouseY])
    
  }else{
    if (strokes.length > 0){
      print(strokes)
      print(list_of_strokes.length)
      list_of_strokes.push( strokes)
      strokes = []
    }
  }
  
  a = 0 
  while( a < list_of_strokes.length){
    b = 0
    while( b < list_of_strokes[a].length-1){
      line(list_of_strokes[a][b][0], list_of_strokes[a][b][1], list_of_strokes[a][b+1][0],list_of_strokes[a][b+1][1])
      b += 1
    }
    a += 1
  }
}