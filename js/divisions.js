class division{

    constructor(x,y,width,height){
    
    var options = {
    
    'restitution' : 0,
    'isStatic' : true,
    
    }
    this.width=width;
    this.height=height;
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    
    
    }
    
    display(){
    
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER)
    fill("white")
    rect(0,0,this.width,this.height)
    pop();
    
    
    }
    
    
    }