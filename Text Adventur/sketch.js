let inputBox, submitButton, textOutput, slider, btn;
let animationSpeed = 1;
let textColor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(30);

    // Create input field
    inputBox = createInput();
    inputBox.position(20, 20);
    inputBox.size(200);
    
    // Create submit button
    submitButton = createButton('Submit Text');
    submitButton.position(230, 20);
    submitButton.mousePressed(updateText);

    // Create slider for animation speed
    slider = createSlider(1, 10, 5);
    slider.position(20, 60);
    
    // Create button to change text color
    btn = createButton("Change Text Color");
    btn.position(20, 100);
    btn.mousePressed(changeColor);

    textOutput = "Enter text above!";
    textColor = color(255);
}

function draw() {
    background(50);
    fill(textColor);
    
    // Animate text movement
    let yPos = height / 2 + sin(frameCount * 0.05 * animationSpeed) * 50;
    text(textOutput, width / 2, yPos);

    // Update animation speed
    animationSpeed = slider.value();
}

// Function to update the displayed text
function updateText() {
    textOutput = inputBox.value();
}

// Function to change text color randomly
function changeColor() {
    textColor = color(random(255), random(255), random(255));
}

// Global callback function for interactivity
function mousePressed() {
    if (dist(mouseX, mouseY, width / 2, height / 2) < 100) {
        textOutput = "You clicked me!";
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}