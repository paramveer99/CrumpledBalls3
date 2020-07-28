class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.paper1 = Constraint.create(options);
        World.add(world, this.paper1);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
   this.sling.bodyA = body;
    }
    display(){
        image(this.paper1,200,20);
        image(this.paper1,170,20);
        if(this.sling.bodyA){
            var pointA = this.paper1.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.paper1,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.paper1,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}