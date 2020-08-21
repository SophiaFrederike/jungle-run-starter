
class Game {
  constructor() {
    this.obstacles= [];
  }
  preloadGame() {
    this.backgroundImgs = [
      {src:loadImage("/jungle-run-starter/assets/background/plx-1.png"), 
      x:0, speed: 1},

      {src:loadImage("/jungle-run-starter/assets/background/plx-2.png"), 
      x:0, speed: 2},
      {src:loadImage("/jungle-run-starter/assets/background/plx-3.png"), 
      x:0, speed: 3}, 

      {src: loadImage("/jungle-run-starter/assets/background/plx-4.png"),
       x:0, 
       speed:4},

     {src:loadImage("/jungle-run-starter/assets/background/plx-5.png"), 
       x:0, speed: 5}
    ]
    this.playerImg = loadImage("/jungle-run-starter/assets/player/bb8.gif"),
    this.coinImg = loadImage("/jungle-run-starter/assets/coins/tile000.png")
  }


  setupGame() {
    // this.obstacle = new Obstacle();
    // this.obstacle.image = this.coinImg;

    this.background = new Background();
    this.background.images = this.backgroundImgs;

    this.player = new Player();
    this.player.image = this.playerImg;


 
  }

  drawGame() {
    clear();
    this.background.drawBackground();
    this.player.drawPlayer();
    //console.log(frameCount)
    if (frameCount % 60=== 0){
      this.obstacles.push(new Obstacle(this.coinImg))
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
    });   

    this.obstacles = this.obstacles.filter((obstacle) => {
    if(obstacle.collision(this.player)){
    return false;
    } else{
    return true
      }

     });
    }
  }
