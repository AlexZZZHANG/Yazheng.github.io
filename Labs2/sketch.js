var yellowTriangle = {
    x: 0,
    y: 0,
    size: 30,
    xSpeed: 1,
    ySpeed: 1,
    colour: 'yellow',
    draw: function(){
        fill(this.colour);
        stroke(0); // Black stroke
        triangle(this.x, this.y, this.x + this.size, this.y + this.size, this.x - this.size, this.y + this.size);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var greenCircle = {
    x: 40,
    y: 50,
    size: 30,
    xSpeed: 2,
    ySpeed: 1,
    colour: 'green',
    draw: function(){
        fill(this.colour);
        stroke(0); // Black stroke
        ellipse(this.x, this.y, this.size, this.size);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('grey'); 
    yellowTriangle.draw();
    yellowTriangle.move();
    greenCircle.draw();
    greenCircle.move();
}