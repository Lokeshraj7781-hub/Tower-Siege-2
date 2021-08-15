class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         this.image= loadImage("block.png")
        World.add(world, this.body);
      }

      display(){

        var pos= this.body.position;
        imageMode(CENTER);
        //console.log(this.body.speed);
        if(this.body.speed <3){
          //super.display();
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
        else{

          World.remove(world, this.body);
          //World.remove(world, this.image);
          World.add(world, this.body);
          
          
          
          World.remove(world, this.image);
          //World.destroy(world, this.body);
          //this.visiblity = 255;
          push();
          this.visiblity - this.visiblity - 5;
          //this.visiblity = this.x;
          //this.visiblity = this.body.position.x;
          tint(255,this.visiblity);
          image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
          pop();
        }


        }
}