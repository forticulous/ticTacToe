import * as React from 'react'
import { BoardSquare } from '../reducers'
import { default as BoardSquareComp } from './board-square'
import * as styles from './board.css'

export interface InertProps {
  board: Array<Array<BoardSquare>>,
}

export interface ActionProps {
  clickBoard: (row: number, col: number) => void,
}

export type Props = InertProps & ActionProps

const Board = ({ board, clickBoard }: Props) => {
  return (
    <div className={styles.mainContent}>
      {[0, 1, 2].map(row => {
        return (
          <div className={styles.row}>
            {[0, 1, 2].map(col =>
              <BoardSquareComp
                type={board[row][col]}
                clickSquare={clickBoard.bind(null, row, col)}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Board