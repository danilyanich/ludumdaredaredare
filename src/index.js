import Game from './Game'

const game = new Game()

window.preload = () => {
  game.preload()
}

window.setup = () => {
  createCanvas(windowWidth, windowHeight)
  frameRate(120)
  game.setup({
    width: windowWidth,
    height: windowHeight
  })
}

let delta = 0
let time = +Date.now()
let timeNow = +Date.now()

window.draw = () => {
  time = +Date.now()
  delta /= 1000.0

  clear(0)

  game.draw(delta)

  for (var i = 0; i < 2500000; i++) {}

  textSize(30)
  textAlign(TOP, TOP)
  text(1.0 / delta, 10, 10)
  text(delta, 10, 30)

  timeNow = +Date.now()
  delta = timeNow - time
  time = timeNow
}

window.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight)
}

window.keyPressed = () => {
  console.log(key, keyCode)
  game.keyPressed(key, keyCode)
}
