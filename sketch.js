function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("lightblue");
    fill("darkblue");
    
    if(mouseIsPressed){
      rect(mouseX,mouseY,20,35)
    }
    
  }
  