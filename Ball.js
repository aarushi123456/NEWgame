class ball{
    constructor(x,y,w,h,angle) {
      var options = {
         'density': 0.04,
         'frictionAir': 0.005,
      };
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse(0, 0, this.w, this.h);
      pop()
    }
  };