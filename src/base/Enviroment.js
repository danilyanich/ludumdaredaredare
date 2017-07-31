const randomDrop = ['city', 'forest', 'lava', 'snow']

class Enviroment {
  constructor () {
    console.log('Enviroment')
  }

  preload () {
    this.song = loadSound('assets/sound/deadlife.ogg')
    this.jump = null
    this.land = null
    this.locations = {
      city: {
        sound: loadSound('assets/enviroment/city.ogg'),
        background: loadImage('assets/enviroment/city.png'),
        steps: loadSound('assets/enviroment/city_steps.ogg')
      },
      forest: {
        sound: loadSound('assets/enviroment/forest.ogg'),
        background: loadImage('assets/enviroment/forest.jpg'),
        steps: loadSound('assets/enviroment/forest_steps.ogg')
      },
      lava: {
        sound: loadSound('assets/enviroment/lava.ogg'),
        background: loadImage('assets/enviroment/lava.jpg'),
        steps: loadSound('assets/enviroment/lava_steps.ogg')
      },
      snow: {
        sound: loadSound('assets/enviroment/snow.ogg'),
        background: loadImage('assets/enviroment/snow.jpg'),
        steps: loadSound('assets/enviroment/snow_steps.ogg')
      }
    }
  }

  setup (config) {
    this.width = config.width
    this.height = config.height
    this.ratio = config.width / config.height
    this.randomLocation()
  }

  draw (delta) {
    const background = this.current.background
    // const imageOffset = (background.height - background.height * this.ratio) / 2
    image(
      this.current.background,
      0, 0, this.width, this.height,
      0, 0, background.width, background.width * this.ratio
    )
  }

  randomLocation () {
    const number = Math.floor(Math.random() * 4.0)
    const location = randomDrop[number]
    if (this.current) {
      this.current.sound.stop()
      this.current.steps.stop()
    }
    this.current = this.locations[location]
    this.current.sound.loop()
    this.current.steps.loop()
  }

  playerJums () {
    this.current.steps.stop()
    // this.jump.play()
  }

  playerLands () {
    // this.land.play()
    this.current.steps.play()
  }
}

export default Enviroment
