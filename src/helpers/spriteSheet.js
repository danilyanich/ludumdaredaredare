export function createImageAreas (
  imageWidth,
  imageHeight,
  areaWidth,
  areaHeight,
  count
) {
  const areas = []
  let offsetY = 0

  while (count > 0) {
    let offsetX = 0

    while (count > 0) {
      if (offsetX + areaWidth <= imageWidth) {
        areas.push({ x: offsetX, y: offsetY })
        offsetX += areaWidth
        count -= 1
      } else break
    }
    if (offsetY + areaHeight <= imageWidth) {
      offsetY += areaHeight
    } else break
  }

  areas.width = areaWidth
  areas.height = areaHeight
  return areas
}
