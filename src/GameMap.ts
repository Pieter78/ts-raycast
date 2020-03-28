class GameMap {
  grid: number[][]
  height: number
  width: number
  tileSize: number

  constructor(height: number, width: number, tileSize: number) {
    this.height = height
    this.width = width
    this.tileSize = tileSize

    this.grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  }

  render(context: CanvasRenderingContext2D) {
    for (var i = 0; i < this.height; i++) {
      for (var j = 0; j < this.width; j++) {
        var tileX = j * this.tileSize
        var tileY = i * this.tileSize
        if (this.grid[i][j]) {
          context.fillStyle = '#222'
          context.fillRect(tileX, tileY, this.tileSize, this.tileSize)
        } else {
          context.strokeStyle = '#ccc'
          context.strokeRect(tileX, tileY, this.tileSize, this.tileSize)
        }
      }
    }
  }
}

export default GameMap
