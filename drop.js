// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI


function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);
  this.color = [random(240), random(244), random(244)];

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0.001, 0.0001);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = function(bbox) {
    var thick = map(this.z, 0, 20, 2, 5);
    strokeWeight(thick);
    stroke(this.color);
    if (this.x > bbox.x && this.x < bbox.x + bbox.w && this.y > bbox.y && this.y < bbox.y + bbox.h) {
      line(this.x, this.y, this.x, this.y + this.len);  
    }
  }
}