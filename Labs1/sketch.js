function setup() {
    createCanvas(windowWidth, windowHeight);
    background(30, 30, 30); // Dark background for contrast
}

function draw() {
    background(30, 30, 30); // Clear the background every frame

    // Pattern of yellow squares
    fill(255, 204, 0); // Yellow fill color
    stroke(255); // White stroke
    for (let x = 50; x < width; x += 100) {
        for (let y = 50; y < height; y += 100) {
            rect(x, y, 40, 40); // Drawing squares in a grid
        }
    }

    // Red triangle follows the mouse
    fill('red'); 
    stroke('black');
    triangle(
        mouseX, mouseY - 20,  // Top point
        mouseX - 20, mouseY + 20, // Bottom left
        mouseX + 20, mouseY + 20 // Bottom right
    );

    console.log("Pattern of squares drawn, and red triangle follows the mouse.");
}