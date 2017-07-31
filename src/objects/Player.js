import constants from 'helpers/constants'
import keyMappings from 'helpers/keyMappings'
import { subscribeForInput } from 'helpers/inputListener'

class Player {
  constructor (characters) {
    this.characters = characters

    this.position = new p5.Vector(
      200, constants.bottomColliderLine - 200
    )
    this.acceleration = -100 /* px/sec */

    subscribeForInput(
      keyMappings.JUMP,
      this.jump
    )
    subscribeForInput(
      keyMappings.NEXT_CAHRACTER,
      this.nextCharacter
    )
  }

  draw (delta) {
    this.velocity += this.acceleration * delta
    if (this.position.y <= constants.bottomColliderLine) {
      this.position.y = constants.bottomColliderLine
    }
  }

  jump () {
    console.log('Player jumps!')
  }

  nextCharacter () {
    console.log('Sharacter switch')
  }
}

export default Player
