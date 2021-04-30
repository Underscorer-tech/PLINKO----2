class particles{

    constructor(x,y,r){
    
      var options = {
      //isStatic:true,
        restitution:0.6,
        friction:0.5,
        density:1,
       
      }
    this.r=r;
    this.body=Bodies.circle(x,y,r,options);
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body)
    Matter.Body.setMass(this.body,this.body.mass*3)
    }
    
    display(){
    
      var pos = this.body.position;
      var angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    fill(this.color);
    ellipseMode(RADIUS)
    ellipse(0,0,this.r*2,this.r*2)
    pop();
    
    
    }
    
    
    }