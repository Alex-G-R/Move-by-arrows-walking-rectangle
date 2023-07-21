
// map
let map = document.getElementById("canvas");
let context = map.getContext('2d');

let mapHeight = 900;
let mapWidth = 1800;

map.height = mapHeight;
map.width = mapWidth;

let mapColor = 'rgb(218, 218, 24)';

map.style.position = 'fixed';
map.style.top = '0';
map.style.left = '0';
map.style.background = mapColor;

// player
let playerX = 200;
let playerY = 200;

let playerWidth = 30;
let playerHeight = 30;

let velocityX = 0;
let velocityY = 0;

window.addEventListener("load", e => {
    document.addEventListener("keyup", changeDirection)
    setInterval(update, 1000/60); // 60 frames per second
});

function update() {
    // Clear the canvas before drawing the updated position
    context.clearRect(0, 0, mapWidth, mapHeight);
    context.fillStyle = mapColor;
    context.fillRect(0, 0, mapWidth, mapHeight);

    context.fillStyle = 'blue';
    context.fillRect(playerX, playerY, playerWidth, playerHeight)

    playerX += velocityX;
    playerY += velocityY;
}

function changeDirection (event) {
    if (event.code == "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if (event.code == "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    } else if (event.code == "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    } else if (event.code == "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
}