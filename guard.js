class Guard{
    constructor(x,y){
        this.guard = createSprite(x,y);
        
    }

    guardAnimation(){
        this.guard.addAnimation("front",soldierf);
        this.guard.addAnimation("back",soldierb);
        this.guard.addAnimation("left",soldierl);
        this.guard.addAnimation("right",soldierr);
    }

    
    guardMovingAnimation(){
        this.guard.bounceOff(wallGroup);

        if(this.guard.velocityX<0){
            this.guard.changeAnimation("left");
        }
        else if(this.guard.velocityX>0){
            this.guard.changeAnimation("right");
        }
        else if(this.guard.velocityY>0){
            this.guard.changeAnimation("front");
        }
        else if(this.guard.velocityY<0){
            this.guard.changeAnimation("back");
        }
    }
    

    followPlayer(){
      //MOVEMENT OF GUARDS
        if(dist(player.x,player.y,this.guard.x,this.guard.y) < 200){
            var R = Math.round(random(1,2));
            if(R === 1){
                if(player.x<this.guard.x){
                    this.guard.velocityX = -3;
                }
                else if(player.x>this.guard.x){
                    this.guard.velocityX = 3;
                }
            }
            else{
                if(player.y<this.guard.y){
                    this.guard.velocityY = -3;
                }
                else if(player.y<this.guard.y){
                    this.guard.velocityY = 3;
                }
            }
        //console.log("R = " + R);
    
        }
        //this.guard.debug = true;
        this.guard.setCollider("rectangle",0,0,this.guard.width-20,this.guard.height-20)

        //console.log("Distance: "+dist(player.x,player.y,this.guard.x,this.guard.y))
    }
}