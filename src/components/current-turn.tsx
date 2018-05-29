import * as React from 'react'
import { Player } from '../reducers'

export interface Props {
  currentTurn: Player,
}

const CurrentTurn = ({ currentTurn }: Props) => {
  return (
    <div>
      {currentTurn === 'cross' ? 'X': 'O'}'s Turn
    </div>
  )
}

export default CurrentTurn