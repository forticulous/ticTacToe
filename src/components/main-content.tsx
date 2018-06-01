import * as React from 'react'
import Board from '../containers/board'
import GameStatus from '../containers/game-status'
import NewGameButton from '../containers/new-game-button'

const MainContent = () => {
  return (
    <div>
      <GameStatus/>
      <NewGameButton/>
      <Board/>
    </div>
  )
}

export default MainContent
