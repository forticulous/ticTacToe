import * as React from 'react'
import Board from '../containers/board'
import CurrentTurn from '../containers/current-turn'

const MainContent = () => {
  return (
    <div>
      <CurrentTurn/>
      <Board/>
    </div>
  )
}

export default MainContent