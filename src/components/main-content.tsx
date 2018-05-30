import * as React from 'react'
import Board from '../containers/board'
import GameStatus from '../containers/game-status'

const MainContent = () => {
  return (
    <div>
      <GameStatus/>
      <Board/>
    </div>
  )
}

export default MainContent