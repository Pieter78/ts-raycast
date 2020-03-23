import React, { FC, useRef, useEffect } from 'react'

interface Props {
  height: number
  width: number
  tileSize: number
}

const Game: FC<Props> = ({ height, width, tileSize }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current === null) return
    const ctx = canvasRef.current.getContext('2d')

    if (ctx === null) return
    ctx.clearRect(0, 0, width * tileSize, height * tileSize)
    ctx.fillStyle = '#000'
    ctx.fillRect(12, 22, 16, 16)
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
