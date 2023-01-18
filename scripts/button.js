function Button(x, y, dim, c, f){
	
	this.pos = createVector(x, y);
	this.dim = dim;
	this.c = c;
	this.r = red(this.c);
	this.g = green(this.c);
	this.b = blue(this.c);
	this.a = 100;
	this.f = f;
	this.visible = false;
	
	
	this.selected = function(){
		return f();
	}
	
	
	this.update = function(){
		if(this.a > 100){
			this.a -= 1.;
		}
		else{
			this.a = 100;
		}
		
		this.c = color(this.r, this.g, this.b, this.a);
	}
	
	this.checkCollision = function(x, y){
		if(this.visible){
			if(this.pos.x < x && this.pos.x + this.dim > x){
				if(this.pos.y < y && this.pos.y + this.dim > y){
					return true;
				}else{
					return false;
				}
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
	
	this.render = function(){
		this.update();
		if(this.visible){
			fill(this.c);
			rect(this.pos.x, this.pos.y, this.dim, this.dim);
		}
	}
}