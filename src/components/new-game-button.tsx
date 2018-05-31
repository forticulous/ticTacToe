import * as React from 'react'

export interface ActionProps {
  newGame: () => void,
}

export type Props = ActionProps

const NewGameButton = ({ newGame }: Props) => {
  return (
    <button onClick={newGame}>New Game</button>
  )
}

export default NewGameButton