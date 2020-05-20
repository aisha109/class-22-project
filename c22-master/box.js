class Box {
    constructor(x, y, w, h){
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, w,h, options);
      this.w = w;
      this.h = h;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      Push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  