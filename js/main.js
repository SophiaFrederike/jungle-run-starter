const game = new Game();

function preload() {
    game.preloadGame();

}
function setup() {
    createCanvas(800,600);
    game.setupGame()
}
function draw() {
    game.drawGame();
}

// add the jump function here:
function keyPressed() {
    if (keyCode === 32){
        game.player.jump();
    }
}
