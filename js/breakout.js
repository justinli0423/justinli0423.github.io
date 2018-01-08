var canvas = document.querySelector('#myCanvas');

// setup 2d rendering context
var ctx = canvas.getContext('2d');

var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 4;
var dy = -4;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffSetTop = 30;
var brickOffSetLeft = 30;
var score = 0;
var lives = 3;

var bricks = [];
for(c = 0; c < brickColumnCount; c++){
  bricks[c] = [];
  for(r = 0; r < brickRowCount; r++){
    bricks[c][r] = {x: 0, y: 0, status: 1};
  }
};

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function drawBricks(){
  for(c = 0; c < brickColumnCount; c++){
    for(r = 0; r < brickRowCount; r++){
      if(bricks[c][r].status == 1){
        var brickX = (c*(brickWidth + brickPadding)) + brickOffSetLeft;
        var brickY = (r*(brickHeight + brickPadding)) + brickOffSetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    };
  };
}

function keyDownHandler(e){
  if(e.keyCode == 39){
    rightPressed = true;
  }
  else if(e.keyCode == 37){
    leftPressed = true;
  }
};

function keyUpHandler(e){
  if(e.keyCode == 39){
    rightPressed = false;
  }
  else if(e.keyCode == 37){
    leftPressed = false;
  }
};

function mouseMoveHandler(e){
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > paddleWidth/2 && relativeX < canvas.width - paddleWidth/2){
    paddleX = relativeX - paddleWidth/2;
  }
};

function drawBall(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

function drawPaddle(){
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function collisionDetection(){
  for(c = 0; c < brickColumnCount; c++){
    for(r = 0; r < brickRowCount; r++){
      var b = bricks[c][r];
      if(b.status == 1){
        if(x > b.x  && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
          dy = -dy;
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColumnCount){
            // document.location.reload();
          }
        }
      }
    };
  };
};

function drawScore(){
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}

function drawLives(){
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

// drawing code
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawScore();
  drawLives();
  drawPaddle();
  collisionDetection();
  drawBricks();
  if(y + dy < 10){
    dy = -dy;
  }
  else if(y + dy > canvas.height - 10 - paddleHeight){
    if(x > paddleX - 2 && x < paddleX + paddleWidth + 2){
      dy = -dy;
    }else{
      lives --;
      if(!lives){
        // document.location.reload();
      }else{
        x = canvas.width/2;
        y = canvas.height - 30;
        dx = 4;
        dy = -4;
        paddleX = (canvas.width - paddleWidth)/2;
      }
    }
  }

  if(x + dx < 10 || x + dx > canvas.width - 10){
    dx = -dx;
  }

  if(rightPressed && paddleX < canvas.width - paddleWidth){
    paddleX += 7;
  }
  if(leftPressed && paddleX > 0){
    paddleX -= 7;
  }

  x += dx;
  y += dy;

  requestAnimationFrame(draw);
};

draw();
