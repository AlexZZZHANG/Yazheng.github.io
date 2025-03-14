let explosions = []; // Array to store explosion objects
let gravity;

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.1); // Simulates gravity
}

function draw() {
    background(0, 30); // Dark background with slight fading effect

    // Loop through explosions and update them
    for (let i = explosions.length - 1; i >= 0; i--) {
        explosions[i].update();
        explosions[i].show();

        // Remove explosions that have faded away
        if (explosions[i].lifespan <= 0) {
            explosions.splice(i, 1);
        }
    }
}

// Function to create explosion at mouse position
function mousePressed() {
    let explosionSize = random(40, 80); // Random size for explosion
    let debrisCount = random(50, 100); // Random debris count
    explosions.push(new Explosion(mouseX, mouseY, explosionSize, debrisCount));
}

// Explosion Class
class Explosion {
    constructor(x, y, size, debrisCount) {
        this.pos = createVector(x, y);
        this.size = size;
        this.debris = [];
        this.lifespan = 255;

        // Generate debris particles
        for (let i = 0; i < debrisCount; i++) {
            this.debris.push(new Debris(this.pos.x, this.pos.y));
        }
    }

    update() {
        this.lifespan -= 5; // Fades over time

        // Update each debris particle
        for (let debris of this.debris) {
            debris.update();
        }
    }

    show() {
        noStroke();
        
        // Shockwave effect
        fill(255, 100, 0, this.lifespan); // Bright orange
        ellipse(this.pos.x, this.pos.y, this.size * 2, this.size * 2);

        // Fireball core
        fill(255, 0, 0, this.lifespan - 50);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);

        // Draw all debris
        for (let debris of this.debris) {
            debris.show();
        }
    }
}

// Debris Class
class Debris {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D().mult(random(2, 8)); // Random explosion velocity
        this.lifespan = 255; // Debris fades over time
        this.size = random(2, 6);
    }

    update() {
        this.pos.add(this.vel);
        this.lifespan -= 5; // Fade out effect
    }

    show() {
        fill(150, 150, 150, this.lifespan); // Grey debris
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
}
