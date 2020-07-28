class Paper {
    constructor(x,y,r ) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.image= loadImage("paper.png");
  
      this.body = Bodies.circle(x,y, r, options);
     World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      imageMode(CENTER);
      fill("red");
      image(this.image,0,0);
      pop();

    }
}