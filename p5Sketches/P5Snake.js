export default function sketch (p) {
let scale_is = 15;
let len_snake = 5;
let screen_sizex = 1000;
let screen_sizey = 400;
let x_vel = -scale_is;
let y_vel = 0;
let x = scale_is * 10;
let y = scale_is * 2;
let x_food = Math.floor(Math.random() * ((screen_sizex - 100) / scale_is)) * scale_is;
let y_food = Math.floor(Math.random() * ((screen_sizey - 100) / scale_is)) * scale_is;
console.log(x_food);
console.log(y_food);
let snake = new_snake();


p.setup = function(){
  p.createCanvas(screen_sizex, screen_sizey);
  p.frameRate(10);

}

p.draw = function() {
  p.background(255, 255, 255);
  p.fill(255, 255, 255);
  p.stroke(0,0,0);
  p.rect(0, 0, screen_sizex - 1, screen_sizey - 1);
  p.fill(0, 0, 0);
  p.textSize(16);
  p.text(snake.length - len_snake, screen_sizex - 100, 50);

  x = x + x_vel;
  y = y + y_vel;

  snake.push([x, y]);
  snake.splice(0, 1);

make_snake(snake);

  for (let i = 0; i < snake.length; i++) {
    for (let a = 0; a < snake.length; a++) {
      // || x < 0 || x > screen_sizex
      if (snake[i][0] == snake[a][0] && snake[i][1] == snake[a][1] && a != i) {
        console.log('Dead');

        snake = new_snake()
        x_vel = -scale_is;
        y_vel = 0;
        x = scale_is * 10;
        y = scale_is * 2;
      };
    };
  };

  p.fill(255, 0, 0);
  p.stroke(0,0,0);
  p.rect(x_food, y_food, scale_is, scale_is);

  if (x == x_food && y == y_food) {
    x_food = Math.floor(Math.random() * ((screen_sizex - 50) / scale_is)) * scale_is;
    y_food = Math.floor(Math.random() * ((screen_sizey - 50) / scale_is)) * scale_is;
    console.log(x_food);
    console.log(y_food);

    snake.unshift([snake[0][0] - scale_is, y]);

  };
}

p.keyPressed = function() {
  y_vel = 0;
  x_vel = 0;
  if (p.keyCode === p.LEFT_ARROW) {
    console.log('1')
    x_vel = -1 * scale_is;
  } else if (p.keyCode === p.RIGHT_ARROW) {
    x_vel = scale_is;
  } else if (p.keyCode === p.UP_ARROW) {
    y_vel = -1 * scale_is;
  } else if (p.keyCode === p.DOWN_ARROW) {
    y_vel = scale_is;
  }
}

function new_snake() {
  var snake = [];
  for (let i = 0; i < len_snake; i++) {
    snake.push([x - i * scale_is, y]);
  };
  return snake;
}

function make_snake(array) {

  for (let i = 0; i < array.length; i++) {
    p.fill(0, 0, 0);
    p.stroke(255,255,255);
    p.rect(array[i][0], array[i][1], scale_is, scale_is);
  };
  
};

}