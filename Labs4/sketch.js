let rainAreas = [];
let cloudImg;
let cloudX = 0;
let cloudSpeed = 2;

function preload() {
  // 加载云朵图片（推荐 CDN 图）
  cloudImg = loadImage('https://cdn-icons-png.flaticon.com/512/414/414825.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50, 50, 80); // Dark sky

  // 云朵左右来回移动
  image(cloudImg, cloudX, 50, 150, 100);
  cloudX += cloudSpeed;
  if (cloudX > width - 150 || cloudX < 0) {
    cloudSpeed *= -1; // 碰到边缘就反向
  }

  // 更新并显示雨滴
  for (let area of rainAreas) {
    area.update();
    area.show();
  }

  // 提示文字
  fill(255);
  textSize(18);
  text("Click anywhere to make it rain harder there!", 20, 30);
}

class RainArea {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.drops = [];
    this.intensity = 50;
  }

  update() {
    for (let i = 0; i < this.intensity; i++) {
      this.drops.push({
        x: this.x + random(-100, 100),
        y: this.y + random(-50, 50),
        speed: random(5, 10)
      });
    }

    for (let d of this.drops) {
      d.y += d.speed;
    }

    this.drops = this.drops.filter(d => d.y < height);
  }

  show() {
    stroke(200, 200, 255);
    strokeWeight(2);
    for (let d of this.drops) {
      line(d.x, d.y, d.x, d.y + 10);
    }
  }
}

function mousePressed() {
  rainAreas.push(new RainArea(mouseX, mouseY));
}