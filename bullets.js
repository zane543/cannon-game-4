class Bullets {
    constructor(x,y,width,height){
        var options={
           density:6,
           friction:6,
           restitution:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("bullets.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,x,y,this.width,this.height);
        pop();

    }
}

