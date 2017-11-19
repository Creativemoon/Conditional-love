var input
var noImg
var yesImg
var correctQuestions = 0

function preload(){
  noImg = loadImage('drake-meme-no.png')
  yesImg = loadImage('drake-meme-yes.png')

}

function setup() {
  createCanvas(800, 600)
  input = createInput()
  input.position(350, 140)  
}

function draw() {
  background('white')
  textSize(16)
  text('Conditional Love', 350, 25)
  text('Who is a weirdo and likes food?', 340, 100)
  text("Hint: There's two possible answers; a male and female.", 350, 220)
  text("Also they are in this very room!", 350, 240)
  text('You entered: ' + input.value(), 350, 190)
  
  if (input.value().toLowerCase() === "hashby" || input.value().toLowerCase() === "astor") {
    image(yesImg, 0, 0, 300, 300)
    text('You answered correctly!', 350, 270)
  } else {
    image(noImg, 0, 0, 300, 300)
    text('Your answer is incorrect.', 350, 270)
  }
}
