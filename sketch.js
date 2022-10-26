function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  textSize(40)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  var micLevel=mic.getLevel();
  console.log(micLevel)

  push()
    translate(width/2,height/2)
    fill("#ffccd5")
    ellipse(0,0,400)
    fill("#ffb3c1")
    ellipse(0,0,100,50)
    fill("#ff8fa3")
    ellipse(-25,0,20,30)//left nose 
    ellipse(25,0,20,30)//right nose
    
    fill(255)
    ellipse(-80,-85,50)
    ellipse(80,-85,50)

    fill(0)
    ellipse(-80+map(mouseX,0,width,-12,12),-85+map(mouseY,0,height,-12,12),20)// left
    ellipse(80+map(mouseX,0,width,-12,12),-85+map(mouseY,0,height,-12,12),20)
    //if(mouseIsPressed)
    //{
    //fill("#f08080")
    //arc(0,75,200,150,0,PI)
    //}
    //else
    //{
    //fill("#ffccd5")
    //arc(0,74,200,70,0,PI)
    //}

     arc(0,75,200,75+micLevel*1000,0,180)


    fill("#ffccd5")
    arc(0,74,200,50,0,180)
  pop()
  
}
