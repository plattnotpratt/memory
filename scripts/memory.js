function Memory(){
  this.gameState = "PLAY";
  this.buttons = [];

  this.init = function(){
    this.playButton = new Button(10,10,100,color(241, 196, 15, 100),() => {return "PLAY"});
    this.resetButton = new Button(10,10,100,color(231, 76, 60, 100),() => {return "RESET"});
    this.menuButton = new Button(10,10,100,color(52, 152, 219, 100),() => {return "MENU"});
    this.buttons.push(this.playButton, this.resetButton, this.menuButton);
  }

  this.update = function(){
  }

  this.render = function(){
    for(let button of this.buttons){
      button.visible = false;
    }
    switch (this.gameState){
      case "PLAY":
        this.resetButton.visible = true;
        this.resetButton.render();
      break;
      case "RESET":
        this.menuButton.visible = true;
        this.menuButton.render();
      break;
      case "MENU":
        this.playButton.visible = true;
        this.playButton.render();
      break;
    }
  }


  this.memClick = function(x, y){
    for(var i = 0; i < this.buttons.length; i++){
      if(this.buttons[i].checkCollision(x, y)){
       this.gameState = this.buttons[i].selected();
      }else{
        //do nothing
      }
    }
  }

}