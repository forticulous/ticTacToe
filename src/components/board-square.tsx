import * as React from 'react'
import { BoardSquare } from '../reducers'
import * as styles from './board-square.css'

export interface InertProps {
  type: BoardSquare,
  gameInProgress: boolean,
}

export interface ActionProps {
  clickSquare: () => void,
}

export type Props = InertProps & ActionProps

const contentForSquare = (
  type: BoardSquare
) => {
  return type === 'cross'
    ? 'X'
    : type === 'circle'
      ? 'O'
      : ''
}

const BoardSquare = ({ type, clickSquare, gameInProgress }: Props) => {
  const clickIfBlank = () => {
    if (gameInProgress &&
        type === 'blank') {
      clickSquare()
    }
  }
  return (
    <div className={styles.square} onClick={clickIfBlank}>
      <div>
        {contentForSquare(type)}
      </div>
    </div>
  )
}

export default BoardSquare
