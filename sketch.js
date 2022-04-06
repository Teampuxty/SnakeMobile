var s;
var scl = 40;
var img;
var food;
const sclC = scl*20;
var b;

function setup() {
  createCanvas(sclC, sclC);
  s = new Snake()
  frameRate(10)
  pickLocation()
  img = loadImage('Apple.png');
  scaleSlider = createSlider(-1, 1,0,1)
  scaleSlider.position(10, 750);
  scaleSlider2 = createSlider(-1,1,0,1)
  scaleSlider2.style('height', '80px');
  scaleSlider2.position(650, 750);
}


function pickLocation(){
  var cols = floor(width/scl)
  var rows = floor(height/scl)
  food = createVector(floor(random(cols)), floor(random(rows)))
  food.mult(scl)
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    s.dir(0,-1)
  } else if (keyCode === DOWN_ARROW){
    s.dir(0,1)}
 else if (keyCode === RIGHT_ARROW){
    s.dir(1,0)}
else if (keyCode === LEFT_ARROW){
    s.dir(-1,0)}
}


function draw() {
  const music = new Audio('Apple.wav')
  var Score = ["Score: ", s.tail.length]
  var Str1 = join(Score, " ")
  var Score2 = ["High Score: ", s.HighScore]
  var Str2 = join(Score2, " ")
  background(1);
  if(s.eat(food)){
    music.play()
    pickLocation()
  }
  s.death()
  s.update()
  s.Show()
  fill(255,145,50)
  rect(food.x, food.y, scl, scl)
  image(img, food.x, food.y)
  fill(255)
  textSize(32)
  text(Str1, 150, 50)
  text(Str2, 150, 750)
  sliderV = scaleSlider.value()
   if (sliderV > 0){
     s.dir(1,0)
   } else if (sliderV < 0){
     s.dir(-1,0)
   }
   sliderV2 = scaleSlider2.value()
   if (sliderV2 > 0){
     s.dir(0,1)
   } else if (sliderV2 < 0){
     s.dir(0,-1)
   }
}
