var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;
let textInput;
let shapeSelector;

function setup() {
    createCanvas(720, 300);
    colourPicker = createColorPicker('deeppink');
    strokeWeightSlider = createSlider(1, 10, 5, 1);
    bgColourPicker = createColorPicker('grey'); 
    textInput = createInput('Hello');
    shapeSelector = createSelect();
    shapeSelector.option('Circle');
    shapeSelector.option('Square');
    
    let bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed(repaint);
    textInput.input(updateText);
    shapeSelector.changed(updateShape);
    
    background(bgColourPicker.value());
}

function draw() {
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());   

    if (mouseIsPressed) {
        if (shapeSelector.value() === 'Circle') {
            ellipse(mouseX, mouseY, 20, 20);
        } else {
            rect(mouseX - 10, mouseY - 10, 20, 20);
        }
    }
}

function repaint() {
    background(bgColourPicker.value());
    console.log("Background changed to:", bgColourPicker.value());
}

function updateText() {
    console.log("User entered:", textInput.value());
}

function updateShape() {
    console.log("Shape changed to:", shapeSelector.value());
}
