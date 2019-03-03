function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(220);

  for (x = 50; x <= width - 50; x += 100) {
    for (i = 10; i <= 70; i += 10) {
      rectMode(CENTER);
      square(x, height / 2, 10 + (70 - i))
    }
  }
}
