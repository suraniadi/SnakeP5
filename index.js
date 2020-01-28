let scl = 15;
let food;

function setup(){
    createCanvas(640, 360);
    pickLocation();
    s =  new Snake();
    frameRate(10);
}

function pickLocation() {
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    console.log(dist(s.x, s.y, food.x, food.y));
    background(51);

    if(s.eat(food)){
        pickLocation();
    }
    
    s.death();
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if(keyCode === UP_ARROW)
    {
        s.dir(0, -1);
    }
    else if(keyCode === DOWN_ARROW){
        s.dir(0, 1);
    }
    else if(keyCode === LEFT_ARROW){
        s.dir(-1, 0);
    }
    else if(keyCode === RIGHT_ARROW){
        s.dir(1, 0);
    }
}