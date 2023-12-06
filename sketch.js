// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background
// (54, 69, 79) //New background

var drops = [];
var paused = false;
var cloud;

function preload() {
cloud = loadImage ('Cloud.png');
}

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function drawBBox(x0, y0, r1, r2){ 

  // Draw only the outline 
  // of the rectangle 
  noFill(); 
  
  // Draw the outline in red 
  stroke(255, 0, 0); 
  rect(x0-r1, y0-r2, 2*r1, 2*r2); 
} 

function draw() {
  if (paused) {
   push()
    //draw paused stuff
    textSize(100);
   textAlign(CENTER, CENTER);
    text('PAUSED', 300, 200);
    pop()
  } else {
    background(54, 69, 79);
    
    let x0 = width/2, y0 = height/2; 
    let r1 = 180, r2 = 100; 

  drawBBox(x0, y0, r1, r2); 
  
  // We don't want to draw this 
  // over and over again 
  noLoop(); 
  
    //image (cloud, mouseX, 5, 150, 150);
    for (var i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].show();
    }
    image (cloud, mouseX, 0, 150, 150);
  }
}

function keyPressed() {
  if (key === 'p') {
    paused = !paused;
  }
}