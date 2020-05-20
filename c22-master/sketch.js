
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
 
  
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

    ground = Bodies.rectangle(200,360,400,30,{isStatic : true})

    World.add(world,ground)
}
function mousePressed() {
   
     boxes.push(new Box(mouseX,mouseY,20,20))  ;
    
}
function draw() {
    background(51);
    var fVal = gSlider.value();
 
    for (var i  = 0; i < boxes.length; i++){
        boxes[i].show();
}
}
function Box(x, y, w, h, options) {

    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
 
    this.body = Bodies.rectangle(x, y, w,h, options);
    this.w = w;
    this.h = h;
    
    World.add(world, this.body);
 
    this.show = function () {
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rect(0, 0, this.w, this.h);
        pop();
    }

Engine.update(engine);

}