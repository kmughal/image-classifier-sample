function setup() {
  createCanvas(32, 32);
}

function draw() {
  background(255);

  var r = random(5,32);
  var x = random(r, width - r);
  var y = random(r, height - r);
  stroke(random(100), random(100), random(100));
  // rotate(random(-0.1, 0.1));
  
  // triangle(0, -r, r, r, r, -r);
  // triangle(0, 15, 20, 10, 6, 25);
  // translate(x, y);

  // // circle(0, 0, r * 2);
  // // saveFrames("circle-", "png");
  // triangle(0,-r,r,-r,-r,r)
  // rectMode(CENTER);
  // rotate(random(-0.1, 0.1));
  // square(0, 0, r * 2);
  // saveFrames("square-", "png");
  // triangle(-r, -r, r, -r, 0, r);
  // saveFrames("triangle-", "png");
}
