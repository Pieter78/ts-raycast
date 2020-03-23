import React, { FC } from 'react'
import Game from './Game'

const TILE_SIZE = 32
const MAP_NUM_ROWS = 11
const MAP_NUM_COLS = 15

const App: FC = () => (
  <Game height={MAP_NUM_COLS} width={MAP_NUM_ROWS} tileSize={TILE_SIZE} />
)

export default App
