class Walls{
    constructor(x,y,w,h){
        this.wall = createSprite(x,y,w,h);
        this.wall.shapeColor = "blue"; 
        wallGroup.add(this.wall);   
    }
}


