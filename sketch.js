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

//this function draws the bounding box with the same outline color as the background so that it blends in
function drawBBox(x1, y1, x2, y2) { 
  stroke(54, 69, 79);
  noFill(); 
  
  //this defines what I want x,y,w,and h
  let x = min(x1, x2), y = min(y1, y2); 
  let w = max(x1, x2) - x, h = max(y1, y2) - y; 
  
  rect(x, y, w, h); 
} 

function draw() {
  if (paused) { // if this paused is true it will stop the animation and display paused to the screen
   push()
    //draw paused stuff
    textSize(100);
   textAlign(CENTER, CENTER);
    text('PAUSED', 300, 200);
    pop()
  } else { // if it isn't paused then it will continue to draw everything as it normally would
    background(54, 69, 79);
    
    let x1 = mouseX, y1 = 100, x2 = mouseX + 150, y2 = 360; // creates bounding box by using mouseX 
    drawBBox(x1, y1, x2, y2); 

   //tells the code what I want x, y, w, and h to be
    let bbox = {
      x: mouseX,
      y: 100,
      w: 150,
      h: 260
    };
      
    drawBBox(bbox.x, bbox.y, bbox.x + bbox.w, bbox.y + bbox.h);

      for (var i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].show(bbox);
      }
    
    image (cloud, mouseX, 0, 150, 150);
    }
}


function keyPressed() {
  if (key === 'p') {
    paused = !paused; //when you press p on the keyboard it toggles paused
  }
}