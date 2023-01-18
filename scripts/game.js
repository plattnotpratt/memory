function Game(){

	this.memory;
	this.init = function(){
		this.memory = new Memory();
		this.memory.init();
	}

	this.render = function(){
		this.memory.update();
		this.memory.render();
	}

	this.gameClick = function(x, y){
		this.memory.memClick(x, y);
	}
}