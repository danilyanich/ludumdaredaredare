const subscribers = []

export const subscribeForInput = (keyCode, callback) => {
  subscribers.push({
    keyCode, callback
  })
}

export const emitInputEvent = (keyCode) => {
  subscribers.forEach(subscriber => {
    if (subscriber.keyCode === keyCode) {
      subscriber.callback()
    }
  })
}
