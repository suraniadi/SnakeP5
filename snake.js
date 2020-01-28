function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.update = function()
    {
        if(this.total === this.tail.length)
        {
            for(var i = 0; i < this.tail.length; ++i)
                this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x = this.x + (this.xspeed * scl);
        this.y = this.y + (this.yspeed * scl);

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.death = function() {
        for(var i = 0; i < this.tail.length; ++i)
            if(dist(this.tail[i].x, this.tail[i].y, this.x,  this.y) < 1)
            {
                this.total = 0;
                this.tail = [];
            }
    }

    this.eat = function(pos) {
        let d = dist(this.x, this.y, pos.x, pos.y);

        if(d < scl){
            this.total++;
            return true;
        }
        else return false;
    }

    this.show  = function() {
        fill(255);
        rect(this.x, this.y, scl, scl);
        for(let i = 0; i < this.total; ++i)
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    this.dir = function(x, y) {
        //No movement backwards
        if((this.xspeed + x !== 0 || x === 0) && (this.yspeed + y !== 0 || y === 0))
        {
            this.xspeed = x;
            this.yspeed = y;
        }
    }
}