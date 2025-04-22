function setup() {
  createCanvas(600, 400);
  frameRate(1); // Update every second
}

function draw() {
  background(30, 30, 40);

  let hr = hour();
  let min = minute();
  let sec = second();

  drawTitle();
  drawCashStacks(hr, min, sec);
}

function drawTitle() {
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Time is Money", width / 2, 40);
}

function drawCashStacks(hr, min, sec) {
  // Hours - Big green stacks (vaults)
  for (let i = 0; i < hr; i++) {
    fill(0, 200, 0);
    rect(40 + i * 12, height - 150, 10, -60); // Vaults
  }

  // Minutes - Medium green bills
  for (let i = 0; i < min; i++) {
    fill(100, 250, 100);
    rect(40 + i * 6, height - 80, 5, -30); // Bills
  }

  // Seconds - Yellowish coins
  for (let i = 0; i < sec; i++) {
    fill(255, 215, 0);
    ellipse(40 + i * 5, height - 20, 5, 5); // Coins
  }

  // Optional: cash platform
  fill(100);
  rect(0, height - 10, width, 10);
}