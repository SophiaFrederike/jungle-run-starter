class Player {
  constructor() {
    this.x = 0;
    this.height = 120;
    this.y = height - this.height;
    this.width = 120;
    this.image;
    this.gravity = 0.2;
    this.velocity = 0;
    // set the height, the initial location + the jump controls for the player
  }

  drawPlayer() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= height - this.height){
      this.y = height - this.height;
    }

    image(this.image, this.x, this.y, this.height, this.width);
    
    // draw the player + jump logic with velocity
  }

  jump(){
    console.log("blabla");
    this.velocity = -10;
  }
}
