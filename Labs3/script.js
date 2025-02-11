var colourPicker;
let strokeWeightSlider;
var bgColourPicker;
var textInput;
var shapeSelector;

function setup() {
    createCanvas(720, 400);
    colourPicker = createColorPicker('deeppink');
    colourPicker.position(10, 10);
    
    strokeWeightSlider = createSlider(1, 10, 5, 1);
    strokeWeightSlider.position(10, 40);
    
    bgColourPicker = createColorPicker('grey');
    bgColourPicker.position(10, 70);
    bgColourPicker.changed(repaint);
    
    textInput = createInput('Hello');
    textInput.position(10, 100);
    
    shapeSelector = createRadio();
    shapeSelector.option('line', 'Line');
    shapeSelector.option('dot', 'Dot');
    shapeSelector.selected('line');
    shapeSelector.position(10, 130);
    
    var clearButton = createButton('Clear');
    clearButton.position(10, 160);
    clearButton.mousePressed(clearCanvas);
    
    background(bgColourPicker.value());
}

function draw() {
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());
    fill(colourPicker.value());
    
    if (mouseIsPressed) {
        let shape = shapeSelector.value();
        if (shape === 'dot') {
            ellipse(mouseX, mouseY, strokeWeightSlider.value());
        } else {
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    }
    
    textSize(20);
    fill(255);
    text(textInput.value(), width / 2, height - 20);
}

function repaint() {
    background(bgColourPicker.value());
}

function clearCanvas() {
    background(bgColourPicker.value());
}
