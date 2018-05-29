import * as React from 'react'
import { BoardSquare } from '../redux/store'
import Circle from './circle'
import Cross from './cross'
import * as styles from './board.css'

export interface Props {
  board: Array<Array<BoardSquare>>,
}

const componentForSquare = (
  board: Array<Array<BoardSquare>>,
  r: number,
  c: number,
) => {
  const boardSquare = board[c][r]
  switch (boardSquare) {
    case 'cross':
      return <Cross/>
    case 'circle':
      return <Circle/>
    case 'blank':
      return <div></div>
  }
}

const Board = ({ board }: Props) => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.row}>
        {componentForSquare(board, 0, 0)}
        {componentForSquare(board, 0, 1)}
        {componentForSquare(board, 0, 2)}
      </div>
      <div className={styles.row}>
        {componentForSquare(board, 1, 0)}
        {componentForSquare(board, 1, 1)}
        {componentForSquare(board, 1, 2)}
      </div>
      <div className={styles.row}>
        {componentForSquare(board, 2, 0)}
        {componentForSquare(board, 2, 1)}
        {componentForSquare(board, 2, 2)}
      </div>
    </div>
  )
}

export default Board