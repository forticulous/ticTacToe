import * as React from 'react'
import { BoardSquare } from '../redux/store'
import * as styles from './board-square.css'

export interface Props {
  type: BoardSquare,
}

const contentForSquare = (
  type: BoardSquare
) => {
  return type === 'cross' 
    ? 'X'
    : type === 'circle'
      ? 'O'
      : ''
}

const BoardSquare = ({ type }: Props) => {
  return (
    <div className={styles.square}>
      <div>
        {contentForSquare(type)}
      </div>
    </div>
  )
}

export default BoardSquare