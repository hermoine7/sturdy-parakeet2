var rain1 =[]
var variables= "12345678";



function setup() {
  createCanvas(800,400);
  
    frameRate(25);
    
    for(var i=0;i<150;i++)
    {
        rain1.push(new rain());
    }
  
}

function draw() {

  background(255,255,255);  
  for(var i=0;i<rain1.length;i++)
  {
      rain1[i].draw();
      rain1[i].update();
  }
  
}