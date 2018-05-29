import * as React from 'react'
import { BoardSquare } from '../redux/store'
import { default as BoardSquareComp } from './board-square'
import * as styles from './board.css'

export interface Props {
  board: Array<Array<BoardSquare>>,
}

const Board = ({ board }: Props) => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.row}>
        <BoardSquareComp type={board[0][0]}/>
        <BoardSquareComp type={board[1][0]}/>
        <BoardSquareComp type={board[2][0]}/>
      </div>
      <div className={styles.row}>
        <BoardSquareComp type={board[0][1]}/>
        <BoardSquareComp type={board[1][1]}/>
        <BoardSquareComp type={board[2][1]}/>
      </div>
      <div className={styles.row}>
        <BoardSquareComp type={board[0][2]}/>
        <BoardSquareComp type={board[1][2]}/>
        <BoardSquareComp type={board[2][2]}/>
      </div>
    </div>
  )
}

export default Board