import { emitInputEvent } from 'helpers/inputListener'
import constants from 'helpers/constants'

import Player from 'objects/Player'
import Enviroment from 'base/Enviroment'

// import SpriteSheet from 'base/SpriteSheet'
// import { createImageAreas } from 'helpers/spriteSheet'
// import Animation from 'base/Animation'

class Game {
  constructor () {
    this.player = new Player()
    this.enviroment = new Enviroment()
  }

  preload () {
    this.enviroment.preload()
    // this.image = loadImage('assets/walker.png')
  }

  setup (config) {
    constants.bottomColliderLine = config.height - 200
    this.enviroment.setup(config)
    // const sprites = createImageAreas(832, 228, 104, 114, 16)
    // this.explosion = new Animation(this.image, sprites, 0.01)
    // this.song.play()
  }

  draw (delta) {
    this.enviroment.draw(delta)
  }

  keyPressed (key, keyCode) {
    emitInputEvent(keyCode)
  }
}

export default Game
