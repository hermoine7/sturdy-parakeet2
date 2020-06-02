class rain {
    constructor(x, y, width, height) {
        this.size = rand(25,35);
        this.x = rand(0,width);
        this.y= rand(-80,height+80);
        this.text = getRandomText();
        this.update();
    }
    draw(){
        textSize(this.size);
        if(Math.random()>0.1)
            fill("teal");
        else
            fill("blue");
        text(this.text,this.x,this.y);
    }
    
    update(){
        this.y+=this.size;
        
        if(this.y>height+80){
            this.y = rand(-80,this.size);
            this.x = rand(0,width);
        }

        this.text = getRandomText();     
        this.draw();
    }
}

function rand(min,max){
    return floor(random(min,max));
}

function getRandomText(){
    return variables[rand(0,variables.length)]
}
    