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
var cloud = loadImage = ('https://www.icloud.com/sharedalbum/#B0iJtdOXm8pfLOa');

function preload() {

}

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
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
    for (var i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].show();
    }
  }
}

function keyPressed() {
  if (key === 'p') {
    paused = !paused;
  }
}