import React, { FC, useRef, useEffect, useState } from 'react'
import GameMap from './GameMap'

interface Props {
  height: number
  width: number
  tileSize: number
}

const Game: FC<Props> = ({ height, width, tileSize }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // const [player, setPlayer] = useState(new Player(1, 2, tileSize))
  const [world, setWorld] = useState(new GameMap(height, width, tileSize))

  useEffect(() => {
    if (canvasRef.current === null) return
    const ctx = canvasRef.current.getContext('2d')

    if (ctx === null) return
    world.render(ctx)
  })

  return (
    <canvas
      ref={canvasRef}
      height={height * tileSize}
      width={width * tileSize}
      style={{ border: '1px solid black' }}
    />
  )
}

export default Game
