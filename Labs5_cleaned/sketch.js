let dogData;
let allDogs = [];
let currentDog = 0;
let dogPosition = { x: 150, y: 80, w: 300, h: 200 };
let fading = false;
let fadeAlpha = 255;

function preload() {
  dogData = loadJSON("data.json");
}

function setup() {
  createCanvas(600, 400);
  for (let url of dogData.images) {
    let img = loadImage(url);
    allDogs.push(img);
  }
}

function draw() {
  background('mintcream');

  textSize(20);
  fill(50);
  text("Click the dog to change it!", 20, 30);

  if (allDogs.length > 0) {
    // display current dog image with fading alpha
    push();
    tint(255, fadeAlpha);
    image(
      allDogs[currentDog],
      dogPosition.x,
      dogPosition.y,
      dogPosition.w,
      dogPosition.h
    );
    pop();

    // reduce alpha if fading
    if (fading) {
      fadeAlpha -= 15;
      if (fadeAlpha <= 0) {
        currentDog = (currentDog + 1) % allDogs.length;
        fadeAlpha = 255;
        dogPosition.x = random(width - dogPosition.w);
        dogPosition.y = random(height - dogPosition.h);
        fading = false;
      }
    }
  }
}

function mousePressed() {
  if (
    mouseX > dogPosition.x &&
    mouseX < dogPosition.x + dogPosition.w &&
    mouseY > dogPosition.y &&
    mouseY < dogPosition.y + dogPosition.h &&
    !fading
  ) {
    fading = true;
  }
}
