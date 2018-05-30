import * as React from 'react'
import { Player, GameStatus } from '../reducers'

export interface Props {
  currentTurn: Player,
  gameStatus: GameStatus,
}

const GameStatus = ({ currentTurn, gameStatus }: Props) => {
  const messageForStatus = () => {
    if (gameStatus === 'cross-wins') {
      return 'X Wins!'
    } else if (gameStatus === 'circle-wins') {
      return 'O Wins!'
    } else if (currentTurn === 'cross') {
      return 'X\'s Turn'
    } else {
      return 'O\'s Turn'
    }
  }
  return (
    <div>
      {messageForStatus()}
    </div>
  )
}

export default GameStatus