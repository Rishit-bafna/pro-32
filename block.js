class block   {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;
  }
  score(){
    if(this.visibility < 0 && this.Visiblity > -1005){
    score++;
    }
  }

  display(){
   
    if(this.body.speed<4){
      push();
      var pos = this.body.position;
      rectMode(CENTER);
      fill("cyan");
      rect(pos.x, pos.y,this.width,this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 10;
      tint(255,this.Visiblity);
      pop();
    }
    
    }
 
    
  };
