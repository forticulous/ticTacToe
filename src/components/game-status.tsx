import * as React from 'react'
import { GameStatus, Player } from '../reducers'

export interface Props {
  currentTurn: Player,
  gameStatus: GameStatus,
}

const GameStatus = ({ currentTurn, gameStatus }: Props) => {
  const messageForStatus = () => {
    switch (gameStatus) {
      case 'cross-wins':
        return 'X Wins!'
      case 'circle-wins':
        return 'O Wins!'
      case 'draw':
        return 'Game ended in a draw'
      default:
        if (currentTurn === 'cross') {
          return 'X\'s Turn'
        } else {
          return 'O\'s Turn'
        }
    }
  }
  return (
    <div>
      {messageForStatus()}
    </div>
  )
}

export default GameStatus
