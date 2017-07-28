var dots_per_sec = 50;
var bg_reset = false; // dots don't stay on screen
var P = []; // used, if dots get saved
var F = []; // used, if fractions get saved
var dots_total = 0;
var dots_circl = 0;
var wdth = 500; // width of the canvas in px
var hght = 500;
var max_y = 5; //for stretching in the graph
var point_size = 10;
var paint_circle = true;
var paint_pi_line = true;

// executed once at the beginning
function setup() {
    createCanvas(wdth * 2 + 50, hght);
    // frameRate(dots_per_sec);
    strokeWeight(3); //default: 1
}

// executed every frame
function draw() {
    if(bg_reset){
        background(0, 0, 0);
    }
    if(paint_circle){
        noFill();
        stroke(0);
        ellipse(wdth/2, hght/2, wdth, hght)
    }
    dot_new = make_dot();
    dots_total += 1;
    // P.push(dot_new); // the dots do not need to be saved for later
    if(dot_new.mag() < 1){ // magnitude(dot_new) < 1 => inside the circle
        dots_circl += 1;
    }
    show_dot(dot_new);
    pi_approx = round(dots_circl / dots_total * 4 * pow(10, 6))/pow(10, 6); // round(x * 1000) / 1000 = round(x, 3 digits)
    F.push(pi_approx);
    show_graph();
    info();
}

function make_dot(){
    pos = createVector(random(-1, 1), random(-1, 1));
    return pos;
}

function show_dot(pos){
    // scaling dot's position from (-1, 1) to (0, width) or (0, hght)
    pss = createVector();
    pss.x = (pos.x + 1) * wdth / 2;
    pss.y = (pos.y + 1) * hght / 2;
    if(pos.mag() < 1){
        fill(0, 170, 0); // light green
        stroke(0, 128, 64); // darker green
    }else
    if(pos.mag() >= 1){
        fill(170, 64, 0); // ligth red / orange
        stroke(64, 0, 0); // darker red
    }
    //     (center-coordinates, point size)
    ellipse(pss.x, pss.y,       point_size);
}

function show_graph(){
    noStroke();
    fill(0);
    x1 = wdth +50;
    y1 = 0
    x2 = 2*wdth +50
    y2 = hght;
    rect(x1, y1, x2, y2);
    if(paint_pi_line){
        stroke(128);
        y1 = max_y - PI;
        y1 = map(y1, 0, max_y, 0, hght);
        line(x1, y1, x2, y1);
    }
    for(i = 0; i < F.length; i++){
        avg = F.portion(0, i).get_average();
        y = max_y - avg;
        y = map(y, 0, max_y, 0, hght);
        x = map(i, 0, F.length, wdth +50 , wdth * 2);
        // noStroke();
        fill(255);
        ellipse(x, y, 5);
    }
}
