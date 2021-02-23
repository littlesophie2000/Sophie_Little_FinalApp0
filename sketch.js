const R = 150;
const xh = angle => R / 15.0 * 16 * Math.pow(Math.sin(angle), 3);
const yh = p => R / 15.0 * (-13 * Math.cos(p) + 5 * Math.cos(2 * p) + 2 * Math.cos(3 * p) + Math.cos(4 * p));

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(15);
  nameP = createP('Your Message!');
  input = createInput('Type Your Message');
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('Red', rSlider.x * 2 + rSlider.width, 35);
  text('Green', gSlider.x * 2 + gSlider.width, 65);
  text('Blue', bSlider.x * 2 + bSlider.width, 95);
  fill('red');
  stroke(255);
  strokeWeight(3);
  beginShape();
  let n = 200;
  for (let i = 0; i < n; i++) {
    let x = width / 2 + xh(TAU * i / n);
    let y = height / 2 + yh(TAU * i / n);
    vertex(x, y);
    {
  nameP.html(input.value());
  text(input.value(), 245, 150);}
  }
  endShape();
}

