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
      <div className={styles.row}>
        <BoardSquareComp
          type={board[0][0]}
          clickSquare={clickBoard.bind(null, 0, 0)}
        />
        <BoardSquareComp
          type={board[0][1]}
          clickSquare={clickBoard.bind(null, 0, 1)}
        />
        <BoardSquareComp
          type={board[0][2]}
          clickSquare={clickBoard.bind(null, 0, 2)}
        />
      </div>
      <div className={styles.row}>
        <BoardSquareComp
          type={board[1][0]}
          clickSquare={clickBoard.bind(null, 1, 0)}
        />
        <BoardSquareComp
          type={board[1][1]}
          clickSquare={clickBoard.bind(null, 1, 1)}
        />
        <BoardSquareComp
          type={board[1][2]}
          clickSquare={clickBoard.bind(null, 1, 2)}
        />
      </div>
      <div className={styles.row}>
        <BoardSquareComp
          type={board[2][0]}
          clickSquare={clickBoard.bind(null, 2, 0)}
        />
        <BoardSquareComp
          type={board[2][1]}
          clickSquare={clickBoard.bind(null, 2, 1)}
        />
        <BoardSquareComp
          type={board[2][2]}
          clickSquare={clickBoard.bind(null, 2, 2)}
        />
      </div>
    </div>
  )
}

export default Board