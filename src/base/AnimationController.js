class AnimationController {
  constructor () {
    this.animations = {}
    this.current = null
  }

  addAnimation (name, animation) {
    this.animations[name] = animation
  }

  setAnimation (label) {
    this.current = this.animations[label]
    if (!this.current) {
      throw new Errow('no such animation ' + label)
    }
  }

  draw (delta, position, width, height) {
    this.current.draw(delta, position, width, height)
  }
}

export default AnimationController
