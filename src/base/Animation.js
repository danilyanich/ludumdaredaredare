class Animation {
  constructor (image, areas, length) {
    this.areas = areas
    this.image = image

    this.timePerFrame = length / areas.length
    this.timeSinceLastFrame = 0.0
    this.frameNumber = 0
  }

  draw (delta, position, width, height) {
    if (this.timeSinceLastFrame >= this.timePerFrame) {
      this.timeSinceLastFrame = 0.0
      this.frameNumber += 1
    }
    if (this.frameNumber >= this.areas.length) {
      this.frameNumber = 0
    }
    image(
      this.image,
      position.x,
      position.y,
      width,
      height,
      this.areas[this.frameNumber].x,
      this.areas[this.frameNumber].y,
      this.areas.width,
      this.areas.height
    )
    this.timeSinceLastFrame += delta
  }
}

export default Animation
